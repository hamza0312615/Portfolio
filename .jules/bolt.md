# Bolt Performance and Architecture Learnings

## Design System & Theme Optimization
- **Color Scheme**: Implemented a modern deep navy background (`#06111d`) paired with high-contrast cyan (`#5cc8ff`) accents and amber (`#ffb454`) secondary highlights. This provides a sleek, high-tech dark mode aesthetic while maintaining AA color contrast ratios.
- **Typography Integration**: Replaced standard sans-serif with Google Fonts `Instrument Serif` (for high-impact headers) and `Manrope` (for clean, readable body text). Max line-length is restricted to `70ch` to optimize reading ergonomics across screen resolutions.
- **Icon Standardization**: Transformed emoji-based icons into Lucide SVG icons (`<i data-lucide="..."></i>`) with dynamic `lucide.createIcons()` re-initialization on JS rendering updates. This eliminates platform-dependent emoji rendering differences and enhances visual consistency.
- **Card Aesthetics**: Applied subtle 1px border glows (`rgba(92, 200, 255, 0.2)`) and uniform border radii across grid items to replace flat grey panels.

## Frontend & Accessibility Standards
- **Keyboard Navigation & Focus**: Added visible outline focus styles (`2px solid #5cc8ff`, offset `3px`) for all interactive buttons, card triggers, and filter chips.
- **Reduced Motion Support**: Added `@media (prefers-reduced-motion: reduce)` rules to pause animations (particles, floating avatars, canvas renders, CSS transitions) for users preferring reduced motion.
- **Responsive Layout**: Maintained a max container width of `1120px` with fluid 8px grid spacing, ensuring clean scaling from mobile viewports (375px+) to ultra-wide displays.
