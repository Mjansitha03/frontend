# Routers

This folder contains the route definitions for the app.

`AppRoutes.jsx` sets up:
- `ToastContainer` (top-center) for user notifications
- `Navbar` displayed on every page
- `Routes` with paths and page components:
  - `/` → Index
  - `/home-page` → HomePage
  - `/sign-up` → SignUp
  - `/sign-in` → SignIn
  - `/forgot-password` → ForgotPassword
  - `/reset-password/:id/:token` → ResetPassword

To add routes
- Import a page component and add a `Route` entry inside the `Routes` component.
