import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {/* Conditional rendering to show NavBar if logged in, otherwise navigate to login */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Outlet context={login} />
    </div>
  );
}

export default App;
