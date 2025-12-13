# Services

This folder contains API helpers used to communicate with the backend.

`Api.js` (axios instance)
- `baseURL` — change to your backend URL if needed (e.g., `http://localhost:5000/api`).
- `Content-Type` is set to `application/json`.
- Request interceptor attaches `Authorization: Bearer <token>` header when a `token` value exists in `localStorage`.

Usage example
```js
import api from "../Services/Api";

const response = await api.post('/auth/sign-in', { email, password });
// on success: response.data.token will be saved to localStorage in the SignIn component
```

Extending services
- Add helper functions (e.g., `authService.js`) that wrap `api` calls to keep components clean and focused.
