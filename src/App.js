import "./App.css";
import Navbar from "./navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
