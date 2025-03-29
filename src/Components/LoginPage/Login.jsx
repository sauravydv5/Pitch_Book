import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login1-container">
      <div className="login-container ">
        <div className="loginLogo">
          <img
            src="https://pitchbook.brightspotcdn.com/69/29/1702582946ab8360e10c78d7e9e4/pitchbook-logo.svg"
            alt="PitchBook Logo"
          />
        </div>
      </div>
      <div className="login-box">
        <h2>Sign In to PitchBook</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="sso">
            Sign in with SSO
          </a>
          <a href="#" className="forgot">
            Forgot password?
          </a>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
