# Copilot Instructions

## Project Overview
Next.js 16 (Pages Router) site for **EY3 Technologies** — a portfolio/marketing site with 3D elements (Three.js), animated UI (Framer Motion), and MDX-driven content for blog posts and job listings.

## Critical File Naming Convention
Pages **must** end in `.page.js` or `.api.js` — configured via `pageExtensions` in `next.config.js`. Plain `.js` files in `src/pages/` are not treated as routes.

## Architecture: Pages → Layouts
Pages are thin re-export shims; all real logic lives in `src/layouts/`:
```js
// src/pages/index.page.js
export { Home as default } from '../layouts/Home/Home';
```
New pages follow this pattern: create `src/layouts/MyPage/MyPage.js` and re-export from `src/pages/mypage.page.js`.

## Component Structure
Each component lives in `src/components/ComponentName/`:
- `ComponentName.js` — implementation
- `ComponentName.module.css` — co-located CSS Modules
- `index.js` — barrel: `export * from './ComponentName'`

Hooks follow the same barrel pattern via `src/hooks/index.js`.

## Styling Conventions
- **CSS Modules** everywhere — no global utility classes, no Tailwind
- Use `cssProps()` from `utils/style` to inject design tokens as CSS custom properties:
  ```js
  style={cssProps({ delay: tokens.base.durationXS })}
  // renders as: style={{ '--delay': '200ms' }}
  ```
- Responsive breakpoints come from `media` in `utils/style`: `desktop: 2080, laptop: 1680, tablet: 1040, mobile: 696`
- Theme tokens are CSS custom properties defined in `src/components/ThemeProvider/theme.js`

## Theme System
`ThemeProvider` stores `'dark'` or `'light'` in `localStorage`. Consume with `useTheme()` from `components/ThemeProvider`. Access tokens via `import { tokens } from 'components/ThemeProvider/theme'`.

## Asset Imports
Special webpack/Turbopack loaders handle these import types:
- **`.svg`** → React component (via `@svgr/webpack`)
- **`.glsl`** → raw string (vertex/fragment shaders for Three.js)
- **`.glb` / `.mp4`** → static URL string

Heavy 3D components use `next/dynamic` to avoid SSR/bundle issues:
```js
const DisplacementSphere = dynamic(() =>
  import('layouts/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);
```

## MDX Content
- **Blog posts**: `src/posts/*.mdx` — rendered via `layouts/Post`
- **Job listings**: `src/careers/*.mdx` — rendered via `layouts/Post` with appended boilerplate (benefits, apply CTA) injected in `getStaticProps` of `src/pages/careers/[slug].page.js`
- MDX is bundled with `mdx-bundler`; rehype plugins: `rehype-slug`, `rehype-preset-minify`, `rehype-img-size`, `@mapbox/rehype-prism`

## Dev Workflows
```bash
npm run dev       # runs scripts/draco.js + scripts/generate-sitemap.js first, then next dev
npm run build     # same pre-scripts, then next build
npm run analyze   # ANALYZE=true next build (bundle analyzer)
```
The `predev`/`prebuild` scripts run automatically — no manual step needed.

## Key Utilities (`src/utils/style.js`)
- `cssProps(obj)` — converts JS object to `--prefixed` CSS custom property map
- `pxToRem(px)` — converts px to rem for accessibility
- `msToNum(ms)` — strips `'ms'` suffix for use in JS timing (e.g. Framer Motion `timeout`)
- `media` — breakpoint constants for JS-driven responsive logic

## Animation Patterns
- Framer Motion used with `LazyMotion` + `domAnimation` (tree-shaken) in `_app.page.js`
- Section enter animations driven by `IntersectionObserver` (native) — sections added to `visibleSections` state when intersecting, then passed as `visible` prop
- `Transition` component wraps entrance animations; accepts `in`, `timeout`, and `unmount` props
