import React, { useState } from 'react';
import './style.css';

const InternshipProgram = () => {
  const [visibleDetail, setVisibleDetail] = useState(null);

  const handleToggle = () => {
    setVisibleDetail(visibleDetail === 'internship-details' ? null : 'internship-details');
  };

  return (
    <section id="internship-program">
      <h1 className="section-heading" data-aos="slide-down">Internship Program</h1>
      <div className="program-card">
        <div className="col-image" data-aos="zoom-in-up">
          <img src="./image/prog2.png" alt="Internship Program Image" className="program-image" />
        </div>
        <div className="col-content" data-aos="zoom-in-up">
          <h2>Internship Program</h2>
          <p>
            Are you an undergraduate student seeking to complete your internship seamlessly, aligning with
            AICTE guidelines? Our cutting-edge portal is designed to simplify your internship journey...
          </p>
          <ul className="program-details">
        <li><strong>Initial Application:</strong> Start by providing key details about yourself and your internship preferences.</li>
        <li><strong>Daily Work Logs:</strong> Easily document your daily activities in a simple text format to keep track of your progress.</li>
        <li><strong>Final Evaluation Form:</strong> Summarize your internship experience and learning outcomes at the end of your program.</li>
    </ul>
          <button
            className="learn-more-btn"
            onClick={handleToggle}
          >
            Learn More
          </button>
        </div>
        {visibleDetail === 'internship-details' && (
          <div className="details" id="internship-details">
            <h3>Streamlined Internship Process</h3>
            <p>Our portal ensures a hassle-free experience...</p>
            <ul>
              <li>Initial Application</li>
              <li>Daily Work Logs</li>
              <li>Final Evaluation Form</li>
            </ul>
            <h4>Why Choose Us?</h4>
            <ul>
              <li><strong>AICTE Compliance:</strong> Our portal is designed to meet all AICTE internship guidelines...</li>
              <li><strong>User-Friendly:</strong> Simple and intuitive interface...</li>
            </ul>
            <button className="enroll-now-btn">Enroll Now</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipProgram;
