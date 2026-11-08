# Design System: Neo-Y2K Cyber-Industrial Telemetry

## Design Read
**Reading this as:** Solo Industrial AI & Data Engineer portfolio for technical directors and hiring managers, with a **Neo-Y2K (Vectorheart + Liquid Chrome + 2000s Sony VAIO / Designers Republic Cyber-Telemetry OS)** visual language, built on Next.js, Tailwind v4, OGL WebGL shaders (`LiquidChrome`, `DitherVeil`), and Emil Kowalski's animation engineering principles.

## Active Dials (`taste-skill`)
- `DESIGN_VARIANCE: 8` — Asymmetric split hero, bimodal density, bento-telemetry matrices, 2-column offset operational logs, single kinetic marquee strip.
- `MOTION_INTENSITY: 7` — WebGL liquid-chrome shader backdrop, interactive 1-bit dithered portrait (`DitherVeil`), `DecryptedText` telemetry readouts, `ScrollVelocity` kinetic vectorheart strip, magnetic pressable CTAs, and strict `prefers-reduced-motion` support.
- `VISUAL_DENSITY: 6` — Bimodal juxtaposition of architectural display typography and high-density tabular monospace telemetry framed in Y2K OS window chrome.

## 1. Color Architecture (Theme-Locked Dark Mode)
- **Primary Canvas (`--background`)**: `#090B10` (Carbon Titanium Obsidian — never pure `#000000`)
- **Elevated Surface (`--card`)**: `#10141D` (Smoked Polycarbonate Dark)
- **Secondary Module (`--secondary`)**: `#161C28` (Anodized Gunmetal)
- **Primary Ink (`--foreground`)**: `#EAEFF7` (Specular Silver White — never pure `#FFFFFF`)
- **Secondary Ink (`--muted-foreground`)**: `#94A3B8` (Brushed Aluminum — WCAG AA > 5.4:1 contrast on `#090B10`)
- **Singular Accent (`--primary` / `--accent`)**: `#B8E62E` (Cyber Acid Chartreuse — saturation < 80% HSL, paired with `#090B10` ink for 12.1:1 AAA contrast on primary CTAs)
- **Structural Chrome Hairline (`--border`)**: `rgba(216, 228, 248, 0.14)` with inner top specular highlight `inset 0 1px 0 rgba(234, 239, 247, 0.22)`

## 2. Typography & Hierarchy
- **Display Voice (`--font-display`)**: `Chakra Petch` (Geometric Neo-Y2K Mecha/Industrial Display) — tight tracking (`-0.03em`), crisp angular terminals, weights 600–700.
- **UI & Editorial Body (`--font-sans`)**: `Space Grotesk` / `Plus Jakarta Sans` — clean technical legibility, `65ch` max measure, relaxed `1.65` line-height.
- **Telemetry & Numerals (`--font-mono`)**: `JetBrains Mono` — `font-variant-numeric: tabular-nums` enforced on all dates, metrics (`98%`), coordinates, and system window headers.

## 3. Shape & Surface Language
- **Shape Consistency Lock**: Crisp Y2K hardware bevels (`rounded-sm` / `2px` radius) with exposed `1px` metallic borders, specular top-edge refraction, and corner vector registration ticks (`+`).
- **Y2K Window Chrome**: Major functional modules feature authentic 2000s OS title bars with tabular module IDs, minimize/maximize vector glyphs, and brushed metallic header gradients.
- **Browser Surfaces**: Custom `::selection` (`#B8E62E` background with `#090B10` ink), custom slim metallic scrollbar, themed `caret-color: #B8E62E`, and high-visibility `:focus-visible` rings.

## 4. Motion & Anti-Slop Discipline
- **Transitions**: Explicit properties only (`transition-[transform,opacity,background-color,border-color,color]`), duration `160ms–220ms`, curve `cubic-bezier(0.23, 1, 0.32, 1)`. Zero `transition-all`.
- **Press Feedback**: Every interactive button uses `active:scale-[0.97]`.
- **Hover Gating**: All hover transforms gated behind `@media (hover: hover) and (pointer: fine)`.
- **Strict Bans**: Zero em-dashes (`—`) or en-dashes (`–`), zero gradient text, zero eyebrows above section headings, zero 3-equal-card rows, zero `h-screen` (uses `min-h-[100dvh]`).
