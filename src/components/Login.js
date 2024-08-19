import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Login() {
  const login = useOutletContext();
  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
