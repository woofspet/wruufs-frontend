import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Signup attempt:", { name, email, password });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">Signup</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signup-button">
            Signup
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>

        {/* 🔹 Login Redirect */}
        <p className="login-redirect">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
