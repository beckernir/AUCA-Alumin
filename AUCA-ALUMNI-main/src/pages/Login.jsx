import React, { useState } from "react";
import '../styles/auth.css';

export default function Login() {
  const [notification, setNotification] = useState('');

  const handleLogin = () => {
    // For demonstration, a notification shows up when the login button is clicked
    setNotification('Login button clicked!');
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">AUCA Alumni Login</h2>
        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="paccyandbertard@example.com" />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" />
        </div>
        <button className="auth-button" onClick={handleLogin}>Login</button>
        <p className="auth-link">Don't have an account? <a href="/register">Register</a></p>
      </div>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}
