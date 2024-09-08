import React from 'react';
import './otpformcss.css'; // Ensure your CSS file is named appropriately and located correctly

const OtpForm = () => {
  const handleGoBack = () => {
    window.location.href = '../index.html';
  };

  return (
    <div className="otp-container">
      <form id="otpForm" className="otp-form">
        {/* OTP Section with Logo */}
        <fieldset className="otp-form-section">
          <legend className="otp-form-legend">
            <span className="otp-text"><strong>ENTER OTP</strong></span>
          </legend>

          <div className="otp-form-group">
            <label htmlFor="otp" className="otp-form-label">OTP</label>
            <input id="otp" name="otp" type="text" placeholder="Enter OTP" className="otp-form-input" required />
          </div>
        </fieldset>

        <div className="otp-form-btn-container">
          <button type="submit" className="otp-form-btn otp-form-btn-submit">Submit</button>
          <button type="button" className="otp-form-btn otp-form-btn-go-back" onClick={handleGoBack}>Go Back</button>
        </div>

        <div className="otp-additional-links">
          <p>Didn't receive an OTP? <a href="#resend" className="otp-link">Resend OTP</a></p>
          <img src="./image/log.webp" alt="Logo" className="otp-legend-logo" />
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
