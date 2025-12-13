import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaUserPlus, FaSignInAlt, FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // check if user is logged in

  // logout and go to home
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Logo */}
      <Link className="navbar-brand fw-bold">MyApp</Link>

      {/* Mobile toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">

          {/* Home link - only if logged in */}
          {token && (
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center justify-content-center"
                to="/home-page"
              >
                <FaHome className="me-1 text-white" />
                <span className="d-inline d-lg-none text-white">Home</span>
              </Link>
            </li>
          )}

          {/* Sign Up / Sign In - only if NOT logged in */}
          {!token && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center justify-content-center"
                  to="/sign-up"
                >
                  <FaUserPlus className="me-1 text-white" />
                  <span className="d-inline d-lg-none text-white">Sign Up</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center justify-content-center"
                  to="/sign-in"
                >
                  <FaSignInAlt className="me-1 text-white" />
                  <span className="d-inline d-lg-none text-white">Sign In</span>
                </Link>
              </li>
            </>
          )}

          {/* Logout button - only if logged in */}
          {token && (
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="nav-link d-flex align-items-center justify-content-center bg-danger text-white rounded px-3 py-2 mt-2 mt-lg-0 w-100 w-lg-auto"
                style={{ cursor: "pointer", border: "none" }}
              >
                <FiLogOut className="me-1 text-white" />
                <span className="d-inline d-lg-none text-white">Logout</span>
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;