import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active btn btn-link" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/product">
                      Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/support">
                      Support
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
