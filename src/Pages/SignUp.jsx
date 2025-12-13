import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Services/Api";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Create account
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.warning("All fields are required!");
      return;
    }

    try {
      const response = await api.post("/auth/sign-up", {
        name,
        email,
        password,
      });

      toast.success(response.data.message || "Signup successful!");
      navigate("/sign-in");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(msg);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-3">Sign Up</h3>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

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
            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />

              {/* Show/Hide */}
              <span
                className="position-absolute top-50 end-0 me-2"
                style={{ cursor: "pointer", transform: "translateY(10%)" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Sign Up
            </button>

            {/* Navigate to login */}
            <p className="text-center">
              Already have an account?
              <span
                className="text-primary ms-1"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

