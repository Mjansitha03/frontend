# Pages

This folder contains the pages that map to routes in the application.

Pages
- `Index.jsx` — Landing page with a call-to-action (Sign Up)
- `SignUp.jsx` — Create a new account using `POST /auth/sign-up`
- `SignIn.jsx` — Sign in and store the returned `token` in `localStorage` (`POST /auth/sign-in`)
- `ForgotPassword.jsx` — Submit email to request a reset link (`POST /auth/forgot-password`)
- `ResetPassword.jsx` — Use `id` and `token` from the URL; verifies token (`GET /auth/verify-reset/:id/:token`) and sets new password (`POST /auth/reset-password/:id/:token`)
- `HomePage.jsx` — Minimal protected home page shown after sign-in

Page conventions
- Each page is a default export and uses React hooks (e.g., `useNavigate`) for navigation.
- Use `api` from `Services/Api.js` for server communication.
