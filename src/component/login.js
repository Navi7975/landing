import React from 'react';
import './logincss.css'; // Ensure your CSS file is named appropriately and located correctly

const Login = () => {
  const handleGoBack = () => {
    window.location.href = '../index.html';
  };

  return (
    <div className="login-container">
      <form id="loginForm" className="login-form">
        {/* Login Section with Logo */}
        <fieldset className="login-form-section">
          <legend className="login-form-legend">
            <span className="login-text"><strong>LOGIN</strong></span>
          </legend>

          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" className="login-form-input" required />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" className="login-form-input" required />
          </div>
        </fieldset>

        <div className="login-form-btn-container">
          <button type="submit" className="login-form-btn login-form-btn-submit">Login</button>
          <button type="button" className="login-form-btn login-form-btn-go-back" onClick={handleGoBack}>Go Back</button>
        </div>

        <div className="login-additional-links">
          <p>Don't have an account? <a href="form.html" className="login-link">Register Now</a></p>
          <img src="./image/log.webp" alt="Logo" className="login-legend-logo" />
        </div>
      </form>
    </div>
  );
};

export default Login;
