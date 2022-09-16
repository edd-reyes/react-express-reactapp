import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const userList = user.id ? (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/users">
        User List
      </Link>
    </li>
  ) : (
    ""
  );

  let btn = (
    <Link to="/" className="btn btn-link text-dark text-decoration-none mx-5">
      Log in
    </Link>
  );
  if (user.id) {
    btn = (
      <div className="dropdown">
        <button
          className="btn btn-link text-dark text-decoration-none mx-5 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {user.first_name}
        </button>
        <ul class="dropdown-menu">
          <li
            onClick={() => {
              onLogout({});
              <Navigate to="/" replace />;
            }}
            style={{cursor:"pointer", textAlign:"center"}}
          >
            Logout
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">{userList}</li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
            <div>{btn}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
