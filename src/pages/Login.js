import React from "react";
import LoginForm from "../components/LoginForm";
import "../styles/login.css";

function Login({ setIsLoggedIn }) {
  return (
    <div className="login-container">
      <div className="card">
        <h2>Login</h2>
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
}
export default Login;
