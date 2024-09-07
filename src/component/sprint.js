import React, { useState } from 'react';
import './style.css';

const SprintProgram = () => {
  const [visibleDetail, setVisibleDetail] = useState(null);

  const handleToggle = () => {
    setVisibleDetail(visibleDetail === 'sprint-details' ? null : 'sprint-details');
  };

  return (
    <section id="sprint-program">
      <h1 className="section-heading" data-aos="slide-down">Sprint International Internship</h1>
      <div className="program-card">
        <div className="col-image" data-aos="zoom-in-up">
          <img src="./image/prog1.png" alt="Sprint Program Image" className="program-image" />
        </div>
        <div className="col-content" data-aos="zoom-in-down">
          <h2>Sprint International Internship</h2>
          <p>
            Step into a transformative journey with our Sprint Program, a unique quality-based internship
            that places you at the forefront of real-world projects with international companies...
          </p>
          <button
            className="learn-more-btn"
            onClick={handleToggle}
          >
            Learn More
          </button>
        </div>
        {visibleDetail === 'sprint-details' && (
          <div className="details" id="sprint-details" data-aos="slide-down">
            <h4>Steps to Join</h4>
            <ul>
              <li>Initial Evaluation: Shortlisting based on your bachelor's CGPA and 12th grade.</li>
              <li>Phase 1 Enrollment: Pay the fee and receive basic training and project introduction.</li>
              <li>Phase 2: Execute the project with ongoing evaluation.</li>
              <li>Phase 3: Continue project execution with a paid stipend.</li>
            </ul>
            <h4>Program Details</h4>
            <p>Duration: Minimum of 6 months...</p>
            <h4>How to Apply</h4>
            <ul>
              <li>Inquiry Form: Fill out our inquiry form to get connected with our team.</li>
              <li>Phase I Payment: Make the payment for Phase I.</li>
              <li>Application Form: Complete the student application form.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SprintProgram;
