import React, { useState } from "react";
import "../styles/auth.css";
import { ToastContainer, toast } from "react-toastify";  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for Toastify

export default function Register() {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleVerify = () => {
    // Mocked verification logic - you can replace with API call
    if (studentId.trim() === "AUCA123") {
      setName("Paccy & Bertrard");
      setIsVerified(true);
      toast.success("Student ID verified successfully!");  // Success notification
    } else {
      toast.error("Invalid Student ID");  // Error notification
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");  // Error notification
      return;
    }
    // Submit logic here (e.g., API call)
    toast.success("Account created successfully!");  // Success notification
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">AUCA Alumni Register</h2>

        <div className="auth-field">
          <label htmlFor="studentId">Student ID</label>
          <input
            id="studentId"
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter your AUCA Student ID"
          />
        </div>

        {!isVerified ? (
          <button className="auth-button" onClick={handleVerify}>
            Verify Student ID
          </button>
        ) : (
          <>
            <div className="auth-field">
              <label>Full Name</label>
              <input type="text" value={name} readOnly />
            </div>

            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="paccyandbertrard@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="auth-button" onClick={handleRegister}>
              Create Account
            </button>
          </>
        )}

        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      <ToastContainer />  {/* Add ToastContainer here to render notifications */}
    </div>
  );
}
