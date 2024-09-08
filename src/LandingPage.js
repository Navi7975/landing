import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS here
// Import AOS for animations if necessary
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import SprintProgram from './component/sprint';
import InternshipProgram from './component/internship';







const HomeSection = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/form'); // Navigate to the Form page
    
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      heading: 'Welcome to Novaversity',
      paragraph: 'Transform your internship experience with our all-in-one Internship Management System (IMS). From seamless onboarding to real-time progress tracking, we simplify every step, ensuring success and growth for interns and organizations alike!',
      imgSrc: './image/Online reading.gif',
      imgAlt: 'Slide 1 Image',
    },
    {
      heading: 'Unlock Boundless Opportunities with the International SPRINT Program.',
      paragraph: 'Experience a transformative journey with our SPRINT Program. Gain invaluable skills, global exposure, and network with industry leaders. Start your adventure with us today!',
      imgSrc: './image/Designer.gif',
      imgAlt: 'Slide 2 Image',
    },
    {
      heading: 'Discover Endless Possibilities with Our Exclusive Internship Program',
      paragraph: 'Our Internship Program offers tailored experiences designed to enhance your career prospects. Collaborate with top professionals, gain hands-on experience, and make a mark in your field!',
      imgSrc: './image/Online Learning.gif',
      imgAlt: 'Slide 3 Image',
    },
  ];

  return (

    <div className="carousel-container">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <div className="content-container">
              <h1>{slide.heading}</h1>
              <p>{slide.paragraph}</p>
              <button onClick={handleClick}>Learn More</button>
            </div>
            <div className="image-container">
              <img src={slide.imgSrc} alt={slide.imgAlt} className="resized-image" />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

const LandingPage = () => {

  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOnLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };
  

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">
          <img src="./image/log.webp" alt="logo" />
        </div>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={handleNavToggle}>
          &#9776;
        </button>
        <div className={`nav-container ${isNavOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#program" onClick={handleDropdownToggle}>Our Program</a>
              <ul className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                <li><a href="#program-intro">Sprint Program</a></li>
                <li><a href="#internship-program">Internship Program</a></li>
              </ul>
            </li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button onClick={handleClickOnLogin}>Login</button>
        </div>
      </nav>


      <HomeSection />


      <section id="programs">
      <SprintProgram />
      <div className="cards-container">
          
          <div className="card" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h2 className="card-title">Model 1 - Graduate Internship Program Overview</h2>
            <p><strong>Eligibility:</strong> Open to graduate students who passed out 0-2 years ago.</p>
            <p><strong>Selection Process:</strong> Based on academic scores (10th, 12th, and Degree) and evaluation by an Industry Hiring Panel.</p>
            <p><strong>Program Fee:</strong>The total fee is ₹85,000, with 82% sponsored by the International Institute of Medical Science & Technology Council. Selected candidates pay only ₹15,000 for the entire program.</p>
            <p><strong>Program Structure:</strong>
              <br /><strong>Month 1:</strong> Soft skill training provided by industry experts.
              <br /><strong>Month 2:</strong> Work with industry, earning a stipend of ₹5,000.
              <br /><strong>Month 2:</strong> Assessment phase, where candidates are either approved or rejected based on performance.
              <br /><strong>Month 3:</strong>Successful candidates join the industry with a salary as per industry standards.
            </p>
            <p><strong>Features:</strong>
              <br />o	Daily Log Tracking
              <br />o	Feedback System
              <br />o	Hassle-Free PDF Report
            </p>
            <button className="enroll-btn">Enroll Now</button>
          </div>

          <div className="card" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h2 className="card-title">Model 2 - Graduate Internship Program Overview</h2>
            <p><strong>Eligibility:</strong> Open to graduate students who passed out 0-2 years ago.</p>
            <p><strong>Selection Process:</strong> Based on academic scores (10th, 12th, and Degree) and evaluation by an Industry Hiring Panel.</p>
            <p><strong>Program Fee:</strong>The total fee is ₹85,000, with 82% sponsored by the International Institute of Medical Science & Technology Council. Selected candidates pay only ₹15,000 for the entire program.</p>
            <p><strong>Program Structure:</strong>
              <br /><strong>Month 1:</strong> Soft skill training provided by industry experts.
              <br /><strong>Month 2:</strong> Work with industry, earning a stipend of ₹5,000.
              <br /><strong>Month 2:</strong> Assessment phase, where candidates are either approved or rejected based on performance.
              <br /><strong>Month 3:</strong>Successful candidates join the industry with a salary as per industry standards.
            </p>
            <p><strong>Features:</strong>
              <br />o	Daily Log Tracking
              <br />o	Feedback System
              <br />o	Hassle-Free PDF Report
            </p>
            <button className="enroll-btn">Enroll Now</button>
          </div>

          <div className="card" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h2 className="card-title">Model 3 - Graduate Internship Program Overview</h2>
            <p><strong>Eligibility:</strong> Open to graduate students who passed out 0-2 years ago.</p>
            <p><strong>Selection Process:</strong> Based on academic scores (10th, 12th, and Degree) and evaluation by an Industry Hiring Panel.</p>
            <p><strong>Program Fee:</strong>The total fee is ₹85,000, with 82% sponsored by the International Institute of Medical Science & Technology Council. Selected candidates pay only ₹15,000 for the entire program.</p>
            <p><strong>Program Structure:</strong>
              <br /><strong>Month 1:</strong> Soft skill training provided by industry experts.
              <br /><strong>Month 2:</strong> Work with industry, earning a stipend of ₹5,000.
              <br /><strong>Month 2:</strong> Assessment phase, where candidates are either approved or rejected based on performance.
              <br /><strong>Month 3:</strong>Successful candidates join the industry with a salary as per industry standards.
            </p>
            <p><strong>Features:</strong>
              <br />o	Daily Log Tracking
              <br />o	Feedback System
              <br />o	Hassle-Free PDF Report
            </p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        </div>
      <InternshipProgram />
      </section>


      <section id="about-us" className="about-us-section">
        <h2 className="main-heading" data-aos="slide-down">About Us</h2>
        <div className="about-us-content">
          <div className="about-us-text" data-aos="zoom-in-up">
            <h3>Who We Are</h3>
            <p className="abbout-para">The Arcyon International Institute of Medical Science & Technology Council (IIMSTC) aims to empower rural women and economically disadvantaged students by providing world-class medical and technology education. Established under Section 8 of the Companies Act 2013, IIMSTC brings together renowned medical practitioners and technologists to offer immersive, hands-on training. The Council partners with top global universities and industries to equip young talents with high-end employability in fields like Medical Science, Nursing, and Modern Technology.
              •	The AIIMS Technology Council, India has partnered with Callus Company Inc., South Korea to bridge the industry-academia gap through cutting-edge skill training and internships. This initiative, aligned with AICTE and UGC guidelines, aims to enhance the employability of Indian technical students. The program is supported by the Engineers Council of India and the Electronics Sector Skill Council of India.
            </p>



            <button className="redirect-button">Register Now</button>
          </div>
          <div className="about-us-image" data-aos="zoom-in-up">
            <img src="./image/home.png" alt="About Us Image" />
          </div>
        </div>
      </section>


      <footer>
        <div className="contact-details">
        <p>If you have any questions or need assistance, please contact support.</p>
      <p>
        <strong>Sprint Representative</strong><br />
        Email: 
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=directoracademic@iimstc.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          directoracademic@iimstc.com
        </a> 
        / 
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aiimscouncil@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          aiimscouncil@gmail.com
        </a><br />
        Phone: 
        <a href="tel:+918553440530">+918553440530</a> / 
        <a href="tel:+918197943343">+918197943343</a> / 
        <a href="tel:+917829520894">+917829520894</a>
      </p>

        </div>
      </footer>





    </>
  );
};

export default LandingPage;
