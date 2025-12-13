# Reset Password Flow — Frontend

This repository contains the frontend for a simple Reset Password Flow demo built with React and Vite.

Key features:
- Sign Up and Sign In
- Forgot Password (sends an email with a reset link)
- Reset Password (validates token and updates password)
- Basic protected area (Home Page)

Stack:
- React + Vite
- Bootstrap for layout/styling
- Axios for REST calls
- React Router for routing
- React Toastify for notifications

Quick Start
1. Ensure Node.js is installed (Node 16+ recommended).
2. Install dependencies:
	```bash
	npm install
	```
3. Start the dev server:
	```bash
	npm run dev
	```
4. Build for production:
	```bash
	npm run build
	```
5. Preview production build:
	```bash
	npm run preview
	```

Configuration
- The frontend expects a backend API at a base URL declared in `src/Services/Api.js`. Change `baseURL` to match your backend (e.g., `http://localhost:3000/api`).
- The app stores an authentication token in `localStorage` under `token`. API requests include this token via an Axios request interceptor.

API Endpoints Used (frontend expectations)
- `POST /auth/sign-up` — create new user
- `POST /auth/sign-in` — authenticate (returns `token`)
- `POST /auth/forgot-password` — send reset link to email
- `GET /auth/verify-reset/:id/:token` — verify reset token
- `POST /auth/reset-password/:id/:token` — set new password


Folder Structure
```
frontend/
├─ package.json
├─ index.html
├─ vite.config.js
├─ eslint.config.js
├─ README.md
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  ├─ Components/
│  │  ├─ Navbar.jsx
│  │  └─ README.md
│  ├─ Pages/
│  │  ├─ Index.jsx
│  │  ├─ SignUp.jsx
│  │  ├─ SignIn.jsx
│  │  ├─ ForgotPassword.jsx
│  │  ├─ ResetPassword.jsx
│  │  └─ HomePage.jsx
│  ├─ Routers/
│  │  ├─ AppRoutes.jsx
│  │  └─ README.md
│  └─ Services/
│     ├─ Api.js
│     └─ README.md
```


Development Notes
- This is a small demo; error handling and security are intentionally minimal for clarity.
- You can add environment support by swapping `Api.js` to read `process.env.VITE_API_BASE_URL` and create a `.env` file to set that.

Contributing
- Improvements and bug fixes are welcomed. Open PRs with small, focused changes.

License
- MIT (if you need a different license, add one to the repo)

Contact
- For questions, update this README or open an issue in the repo.

Repository
- Add your GitHub link here or replace the placeholder below with the real repo URL.
- Placeholder GitHub link: https://github.com/Mjansitha03/frontend.git


