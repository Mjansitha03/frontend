import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      {/* Sign up button */}
      <button className="btn btn-dark btn-lg animated-btn" onClick={() => navigate("/sign-up")}>
        Sign Up
      </button>

      {/* Simple bounce animation */}
      <style>{`
        .animated-btn {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default Index;


