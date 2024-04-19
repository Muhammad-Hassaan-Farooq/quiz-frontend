import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <nav className="nav">
      <Link className="navbar-brand" to="/">
        Recipe App
      </Link>

      {!isLoggedIn && (
        <ul className="navbar-nav not-logged">
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      )}
      {isLoggedIn && (
        <ul className="navbar-nav not-logged">
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/create-recipe">Create Recipe</Link>
          </li>

          <li>
            <Link className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
