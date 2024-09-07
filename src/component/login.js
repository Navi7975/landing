import React from 'react';
import './logincss.css'; // Ensure your CSS file is named appropriately and located correctly

const Login = () => {
  const handleGoBack = () => {
    window.location.href = '../index.html';
  };

  return (
    <form id="loginForm" className="login-form">
      {/* Login Details Section */}
      <fieldset className="login-form-section">
        <legend className="login-form-legend">Login Details</legend>
        <div className="login-form-group">
          <label htmlFor="email" className="login-form-label">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="login-form-input" required />
        </div>
        <div className="login-form-group">
          <label htmlFor="password" className="login-form-label">Password</label>
          <input id="password" name="password" type="password" placeholder="Password" className="login-form-input" required />
        </div>
      </fieldset>

      <div className="login-button-container">
        <button type="submit" className="login-btn-submit">Login</button>
        <button type="button" className="login-btn-go-back" onClick={handleGoBack}>Go Back</button>
      </div>

      <div className="login-additional-links">
        <p>Don't have an account? <a href="form.html" className="login-link">Register Now</a></p>
      </div>
    </form>
  );
};

export default Login;
