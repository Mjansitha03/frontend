# Components

This folder contains reusable UI components used across pages.

Currently included:
- `Navbar.jsx` — navigation bar for public and authenticated users. It checks `localStorage.token` to show/hide links and handles logout by removing `token`.

Adding components
- Create a new component file and export it as default.
- Prefer small, testable components. If a component grows large, split into smaller pieces.

Style and assets
- We use Bootstrap; prefer utility classes unless a custom style is required. Add CSS to `src/index.css` if needed.
