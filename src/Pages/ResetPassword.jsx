import React, { useEffect, useState } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import { toast } from "react-toastify"; 
import api from "../Services/Api"; 
import { VscEye, VscEyeClosed } from "react-icons/vsc"; 

const ResetPassword = () => {
  const { id, token } = useParams();  
  const navigate = useNavigate(); 

  const [password, setPassword] = useState(""); 
  const [show, setShow] = useState(false); 
  const [valid, setValid] = useState(null); 
  const [expires, setExpires] = useState(0); 
  const [error, setError] = useState("");

  // Verify token from backend (check if link is valid)
  useEffect(() => {
    const verify = async () => {
      try {
        const res = await api.get(`/auth/verify-reset/${id}/${token}`);

        // token ok — mark valid and set expiry seconds
        setValid(true);
        setExpires(res.data.expiresInSeconds || 60);
      } catch (err) {
        // invalid token — show server message or fallback text
        setValid(false);
        setError(err.response?.data?.message || "Invalid or expired link");
      }
    };

    verify();
  }, [id, token]);

  // Countdown expiry timer (update seconds left each second)
  useEffect(() => {
    if (!valid) return;

    const int = setInterval(() => {
      setExpires((prev) => {
        if (prev <= 1) {
          // time's up — invalidate token and show expired message
          clearInterval(int);
          setValid(false);
          setError("Reset link expired");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(int);
  }, [valid]);

  // Submit password (send new password to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validations: required and min length
    if (!password) return toast.warning("Password is required");
    if (password.length < 6)
      return toast.warning("Password must be at least 6 characters");

    try {
      // call reset API, show success and redirect to sign in
      const res = await api.post(`/auth/reset-password/${id}/${token}`, { password });
      toast.success(res.data.message || "Password updated successfully");
      navigate("/sign-in");
    } catch (err) {
      // show server error or fallback
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-4">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-3">Reset Password</h3>

          {valid === false ? (
            <p className="text-center text-danger">{error}</p>
          ) : valid === null ? (
            <p className="text-center">Checking link...</p>
          ) : (
            <>
              <p className="text-center text-success">
                Link expires in <strong>{expires}</strong> seconds
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3 position-relative">
                  <input
                    type={show ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <span
                    className="position-absolute top-50 end-0 translate-middle-y me-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                  >
                    {show ? <VscEyeClosed /> : <VscEye />}
                  </span>
                </div>

                <button className="btn btn-primary w-100" disabled={!valid}>
                  Update Password
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;


