import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // 👈 Import external CSS

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login attempt with email:", email, "and password:", password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button className="form-button" type="submit">
            Login
          </button>
        </form>

        <p className="form-footer">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="form-link">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
