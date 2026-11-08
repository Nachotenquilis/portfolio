'use client';

import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './LiquidChrome.css';

export const LiquidChrome = ({
  baseColor = [0.07, 0.09, 0.13],
  speed = 0.14,
  amplitude = 0.28,
  frequencyX = 2.6,
  frequencyY = 2.4,
  interactive = true,
  className = '',
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const renderer = new Renderer({
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      alpha: false
    });
    const gl = renderer.gl;
    gl.clearColor(0.035, 0.043, 0.063, 1);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          for (float i = 1.0; i < 8.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 18.0);
          float ripple = sin(10.0 * dist - uTime * 2.0) * 0.025;
          uv += (diff / (dist + 0.0001)) * ripple * falloff;

          float denom = max(abs(sin(uTime - uv.y - uv.x)), 0.18);
          vec3 color = uBaseColor / denom;
          color = clamp(color, 0.0, 0.85);
          return vec4(color, 1.0);
      }

      void main() {
          gl_FragColor = renderImage(vUv);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([gl.canvas.width, gl.canvas.height, gl.canvas.width / Math.max(gl.canvas.height, 1)])
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0.5, 0.5]) }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });

    let isVisible = true;
    let animationId = 0;

    function resize() {
      if (!container) return;
      renderer.setSize(container.offsetWidth || 1, container.offsetHeight || 1);
      const resUniform = program.uniforms.uResolution.value;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / Math.max(gl.canvas.height, 1);
      if (reducedMotion) {
        renderer.render({ scene: mesh });
      }
    }

    window.addEventListener('resize', resize);
    resize();

    function handleMouseMove(event) {
      if (reducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / Math.max(rect.width, 1);
      const y = 1 - (event.clientY - rect.top) / Math.max(rect.height, 1);
      const mouseUniform = program.uniforms.uMouse.value;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    if (interactive && !reducedMotion) {
      window.addEventListener('pointermove', handleMouseMove, { passive: true });
    }

    function update(t) {
      if (!isVisible) {
        animationId = 0;
        return;
      }
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
      if (!reducedMotion) {
        animationId = requestAnimationFrame(update);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationId && !reducedMotion) {
          animationId = requestAnimationFrame(update);
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    container.appendChild(gl.canvas);

    if (reducedMotion) {
      program.uniforms.uTime.value = 1.5;
      renderer.render({ scene: mesh });
    } else {
      animationId = requestAnimationFrame(update);
    }

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      if (interactive && !reducedMotion) {
        window.removeEventListener('pointermove', handleMouseMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return <div ref={containerRef} className={`liquidChrome-container ${className}`} {...props} />;
};

export default LiquidChrome;
