# GitHub Copilot Instructions — Products Gallery App

Purpose: Give AI coding agents immediate, actionable context to be productive in this repo. Keep changes minimal, explicit, and follow existing patterns (React + Tailwind + Vite).

1) Big picture
- SPA built with React (Vite) and Tailwind. Routing in `src/routes/AppRouter.jsx` and pages under `src/pages/`.
- Global behaviors use React Context: `src/context/ThemeContext.jsx` (dark/light). Add `LanguageContext` for AR/EN.
- API helpers in `src/utils/api/api.js` (Axios). UI is componentized under `src/components/`.

2) Key files to know (examples)
- `src/context/ThemeContext.jsx` — toggles `document.documentElement.classList` and persists `theme` in localStorage (used by Navbar).
- `src/components/Navbar/Navbar.jsx` — contains navigation, theme toggle, mobile menu and currently shows cart badge. Add language toggle here: `AR | EN`.
- `src/routes/AppRouter.jsx` — central route map. Add routes for `/about`, `/contact` and remove `/cart` (see Cart removal below).
- `src/pages/About/About.jsx` — currently simple; update to step-by-step company story, timeline blocks with on-scroll animations.
- `src/pages/Contact/` — does not exist; create `Contact.jsx` with the specified form, map and contact details.
- `src/components/ProductCard/` and `src/components/Slider/` — reference product quick-add behaviors that must be removed/disabled when cart is removed.

3) Required immediate tasks (very specific)
- Remove all cart functionality (site becomes landing pages):
  - Remove `src/context/CartContext.jsx`, its provider in `src/App.jsx`, and any uses (search for `CartContext`, `cart`, `Cart` page, `addToCart`/`removeFromCart`).
  - Delete `src/pages/Cart/cart.jsx` and remove `/cart` route from `AppRouter.jsx`.
  - Remove Cart API functions in `src/utils/api/api.js` (`getCarts`, `createCart`, `updateCart`, `addToCart`, etc.) or keep them separated under `deprecated/` if needed.
  - Remove cart icons/badges/calls-to-action from `Navbar.jsx`, `ProductCard.jsx`, `Slider.jsx`, `Home.jsx`, and `ProductDetails.jsx`.
- Implement new landing pages and components:
  - `src/pages/About/About.jsx` — Add sections: Company overview, Vision & Mission, Values, Company story, interactive timeline. Use IntersectionObserver to reveal steps on scroll (fade-in + small upward translate). Images: subtle parallax or fade-in; use `loading="lazy"` and `decoding="async"`.
  - `src/pages/Contact/Contact.jsx` — Form with fields: `Name`, `Email`, `Phone`, `Message`. Inputs: clean borders, on focus change border to brand color + soft glow (Tailwind: focus:ring, focus:border). Submit button: brand color, hover: slight lift + color shift, active: micro scale-down. Map section below (embed iframe) and company contact details prominently.
  - `src/components/Footer/Footer.jsx` — Logo, quick links, contact info, social icons. Background: dark or brand color. Social hover: color change + slight scale transform.
- Language system (AR / EN):
  - Add `src/context/LanguageContext.jsx` to store `{ lang: 'en'|'ar', setLang }` and persist in localStorage `lang`.
  - Language toggle UI in `Navbar.jsx` as `AR | EN` (button). Switching must be smooth (no reload). Implement fade transition on content change.
  - Flip layout when `lang === 'ar'` by setting `document.documentElement.dir = 'rtl'` and `document.documentElement.lang = 'ar'` (and `ltr`/`en` for English).
  - Store copy in small JSON modules (e.g., `src/i18n/en.js`, `src/i18n/ar.js`) and load strings from context-provided `t('key')` function. Update all page text to use translations—About/Contact/Header/Footer most important.
- Theme & colors: Keep existing Theme behavior. Preserve dark/light mode; ensure new components respond to `.dark` classes and Tailwind utilities.

4) Performance & feel
- Lazy-load images (`loading="lazy"`), use `decoding="async"` and srcset where applicable. Use low-cost animations: opacity/transform; avoid layout-shifting animations.
- Smooth scrolling: enable CSS `scroll-behavior: smooth` in root or use small JS polyfill for cross-browser.
- On-scroll reveals must be cheap (IntersectionObserver + add `.translate-y-2 opacity-0` -> remove when visible).

5) Project-specific conventions & patterns
- Use functional components, default exports, and keep files co-located (component + CSS in same folder if needed).
- Styling is Tailwind-first. Use utility classes; prefer `transition` + `transform` + `opacity` for animations.
- Persist user preferences in `localStorage` (`theme` key already used, add `lang` key for language).
- Keep API helpers in `src/utils/api/api.js` (Axios instance exported as `api`) and create small wrappers for new integrations (e.g., contact form submission if added later).

6) Developer workflows
- Start dev server: `npm run dev` (Vite). Build: `npm run build`. Preview production: `npm run preview`.
- Lint: `npm run lint` (ESLint). Use the browser devtools to inspect layout direction/RTL when toggling languages.
- Quick verification steps after removing Cart: run `git grep -n "CartContext\|addToCart\|/cart"` to ensure no references remain.

7) Common pitfalls & checks
- When toggling `dir='rtl'` ensure component layouts using `flex-row`/`space-x-*` adjust correctly—prefer logical properties (`space-x-reverse` or use `dir` aware Tailwind plugins if needed).
- Keep image aspect ratios to avoid layout shifts (Tailwind `aspect-w-* aspect-h-*` or `aspect-ratio` utilities).
- Make sure to update `src/routes/AppRouter.jsx` navigation links and `Navbar.jsx` menu to include `Contact` and remove cart-related links.

8) Example PR checklist for implementing the redesign
- [ ] Remove cart code and confirm no runtime errors
- [ ] Add `Contact` page implementation and route
- [ ] Expand `About` page per spec with on-scroll steps and images
- [ ] Add `Footer` component and include it in layout
- [ ] Add `LanguageContext` and make `AR | EN` toggle work (no reload, RTL flip)
- [ ] Ensure dark mode still works and is persisted
- [ ] Verify lazy loading and smooth-scrolling behavior
- [ ] Run `npm run lint` and fix issues

If anything in these instructions is unclear or you want a stricter implementation plan (file-by-file patch list), tell me which part to expand and I will iterate.  

---
*Short, focused guidance for AI contributors — keep work incremental and open small PRs with one major change per PR.*
