---
status: pending
title: Hello World App
---

A minimal single-page app that displays a friendly "Hello, World!" greeting, built from scratch on the standard project scaffold.

1. Create `package.json` with the project name, ESM module type, and all required dependencies: react, react-dom, @tanstack/react-router, @tanstack/router-plugin, @tanstack/router-devtools, tailwindcss, @tailwindcss/vite, vite, @vitejs/plugin-react, typescript, and the matching @types packages. Include `dev`, `build`, and `preview` scripts.
   - Expected outcome: dependencies can be installed and the project can be built and served.

2. Create `vite.config.ts` registering `@tanstack/router-plugin/vite` (with `target: 'react'` and auto code splitting), `@tailwindcss/vite`, and `@vitejs/plugin-react`, plus a path alias so `@/` resolves to `src/`.
   - Expected outcome: Vite serves the app, Tailwind styles compile, and `@/` imports work.

3. Create `tsconfig.json` (and any referenced config files such as `tsconfig.node.json`) with strict TypeScript settings for a React + Vite app, bundler module resolution, and the `@/*` path mapping matching the Vite alias.
   - Expected outcome: the project typechecks with no configuration errors.

4. Create `index.html` at the project root with a `<div id="root">` mount point, a page title of "Hello World", and a module script tag pointing at `/src/main.tsx`.
   - Expected outcome: the browser loads the app entry point.

5. Create `src/styles/global.css` whose first line is exactly `@import "tailwindcss";`.
   - Expected outcome: Tailwind utilities are available across the app.

6. Create `src/main.tsx` that imports `src/styles/global.css`, creates the TanStack Router instance from the generated route tree, and renders the app into the root element in strict mode.
   - Expected outcome: the React app mounts and routing is live.

7. Create `src/routes/__root.tsx` as the app shell: a root route rendering an `<Outlet />` inside a full-viewport, centered layout with a soft gradient background and dark-mode-friendly base colors, plus the router devtools component.
   - Expected outcome: every route renders inside a consistent, polished shell.

8. Create `src/routes/index.tsx` as the home route (`/`): a centered "Hello, World!" hero with a large bold heading, a short welcoming subheading, and subtle Tailwind styling (spacing, typography, a gentle accent color).
   - Expected outcome: visiting `/` shows the Hello World greeting, nicely styled.

9. Run the dev server to verify: the app builds, typechecks, and the home page renders the greeting without console errors. (`src/routeTree.gen.ts` is generated automatically by the router plugin and is never edited by hand.)
   - Expected outcome: a working Hello World app at `/`.
