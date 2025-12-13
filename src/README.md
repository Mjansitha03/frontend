# Source Directory

This folder contains the frontend application source code built with React and Vite.

How the app is wired
- `main.jsx` — bootstraps React and renders the app
- `App.jsx` — a simple wrapper that mounts `AppRoutes`
- `Routers/AppRoutes.jsx` — defines the app routes and global UI like the `Navbar` and `ToastContainer`

When to add files
- Add shareable, re-usable UI in `Components/`
- Add top-level pages in `Pages/` and wire them in `Routers/AppRoutes.jsx`
- Add API/service helpers in `Services/`

Style and conventions
- Bootstrap is used for layout and quick UI; you can replace or extend styles in `index.css`.
- Keep components small and focused.
