'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

const Magnet = ({
  children,
  padding = 60,
  disabled = false,
  magnetStrength = 3.5,
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const magnetRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 160, damping: 16, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 160, damping: 16, mass: 0.6 });

  const handlePointerMove = e => {
    if (disabled || reduceMotion || !magnetRef.current) return;
    if (e.pointerType === 'touch') return;

    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = Math.abs(centerX - e.clientX);
    const distY = Math.abs(centerY - e.clientY);

    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      rawX.set((e.clientX - centerX) / magnetStrength);
      rawY.set((e.clientY - centerY) / magnetStrength);
    } else {
      rawX.set(0);
      rawY.set(0);
    }
  };

  const handlePointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={magnetRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative inline-block ${wrapperClassName}`}
      {...props}
    >
      <motion.div
        className={innerClassName}
        style={{
          x,
          y,
          willChange: 'transform'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Magnet;
