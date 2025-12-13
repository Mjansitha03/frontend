import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify"; 
import api from "../Services/Api";

const ForgotPassword = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(""); 

  // send email to backend to get a reset link
  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple validation: need an email
    if (!email) return toast.warning("Email is required!");

    try {
      // call API and show success message
      const res = await api.post("/auth/forgot-password", { email });
      toast.success(res.data.message || "Reset link sent!");
    } catch (err) {
      // show error message if request failed
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-5">Forgot Password</h3> 

          <form onSubmit={handleSubmit}>
            {/* email input field */}
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* button to send the reset link */}
            <button type="submit" className="btn btn-primary w-100 mb-2" >
              Send Reset Link
            </button>

            <div className="text-center mt-2">
              <p>
                Remember password?{" "}
                <span style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/sign-in")}>
                  Sign In
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


