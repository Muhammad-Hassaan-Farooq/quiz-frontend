import axios from "axios";
import React, { useEffect, useState } from "react";

const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/auth/login", {
      email: username,
      password: password,
    });

    setMessage(response.data.msg);

    if ((response.data.msg = "User logged in successfully")) {
      localStorage.setItem("token", response.data.data.token);
      setIsLoggedIn(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>

      <h6 className="form-message">{message}</h6>
    </form>
  );
};

export default LoginForm;
