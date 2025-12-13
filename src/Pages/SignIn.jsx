import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Services/Api";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Login user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.warn("Please enter email and password");
    }

    try {
      const response = await api.post("/auth/sign-in", { email, password });

      // Save token
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      toast.success(response.data.message);
      navigate("/home-page");
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(msg);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-3">Sign In</h3>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="position-relative mb-3">
              <label className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />

              {/* Show/Hide password */}
              <span
                className="position-absolute top-50 end-0 me-2"
                style={{ cursor: "pointer", transform: "translateY(10%)" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>

            {/* Forgot password */}
            <p
              className="text-end text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </p>

            {/* Submit */}
            <button className="btn btn-primary w-100 mb-2">Sign In</button>

            {/* Go to signup */}
            <p className="text-center">
              Don’t have an account?
              <span
                className="text-primary ms-1"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;


