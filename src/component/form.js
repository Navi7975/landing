import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './form.css';

// Main Form component
const Form = () => {


  return (
    <div className="form-background">
      <form id="multiPartForm" className="form-container">
      <h2 className="form-heading">REGISTRATION</h2>
        {/* Personal Details Section */}
        <fieldset className="form-section">
          <legend className="form-section-title">Personal Details</legend>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="First Name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Last Name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select id="gender" name="gender" className="form-input" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone Number" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address</label>
            <input id="address" name="address" type="text" placeholder="Address" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              className="form-input half-width"
              required
            />
          </div>

        </fieldset>

        {/* Academic Details Section */}
        <fieldset className="form-section">
          <legend className="form-section-title">Academic Details</legend>
          <div className="form-group">
            <label htmlFor="college" className="form-label">College</label>
            <select id="college" name="college" className="form-input" required>
              <option value="">Select College</option>
              {/* Add options dynamically */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="degree" className="form-label">Degree</label>
            <select id="degree" name="degree" className="form-input" required>
              <option value="">Select Degree</option>
              {/* Add options dynamically */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="branch" className="form-label">Branch</label>
            <select id="branch" name="branch" className="form-input" required>
              <option value="">Select Branch</option>
              {/* Add options dynamically */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="degreeStatus" className="form-label">Degree Status</label>
            <select id="degreeStatus" name="degreeStatus" className="form-input" required>
              <option value="">Select Degree Status</option>
              {/* Add options dynamically */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="university" className="form-label">University</label>
            <input id="university" name="university" type="text" placeholder="University" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="usn" className="form-label">USN</label>
            <input id="usn" name="usn" type="text" placeholder="USN" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="semester" className="form-label">Semester</label>
            <input id="semester" name="semester" type="text" placeholder="Semester" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="Book" className="form-label">Text Book</label>
            <input id="Book" name="Text Book" type="text" placeholder="Text Book" className="form-input" required />
          </div>
        </fieldset>

        {/* Document Upload Section */}
        <fieldset className="form-section">
          <legend className="form-section-title">Document Upload</legend>
          <div className="form-group">
            <label htmlFor="photo" className="form-label">Photo</label>
            <input id="photo" name="photo" type="file" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="aadharProof" className="form-label">Aadhar Proof</label>
            <input id="aadharProof" name="aadharProof" type="file" className="form-input" required />
          </div>
        </fieldset>

        <div className="btn-container">
          <button type="submit" id="submit-btn" className="button-submit">Submit</button>
          <button type="button" id="go-back-btn" className="button-go-back" onClick={() => window.location.href = '../index.html'}>Go Back</button>
        </div>

        {/* Additional Links */}
        <div className="additional-links">
          <p className="login-link">Already have an account? <a href="login.html">Login here</a></p>
          <img src="./image/log.webp" alt="Logo" className="login-legend-logo" />
        </div>
      </form >
    </div>
  );
};

export default Form;
