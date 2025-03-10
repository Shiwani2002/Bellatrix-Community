import React from "react";
import "./Contactus.css"
const ContactUs = ({ imageUrl }) => {
  return (
    <>
      <div className="contactus-container">
        <div className="contactus-image">
          <img src={imageUrl} alt="contact-banner" />
        </div>
        <div className="contactus-content">
          <h2>Get in Touch with Us</h2>
        
          <p>We are all in 2024!</p>
       
          <p>
            Bellatrix is a community-driven initiative dedicated to uplifting women in technology.
            We believe in fostering confidence, skills, and leadership through mentorship, 
            education, and real-world experience. Our goal is to create a supportive environment where
            aspiring women in tech can learn, collaborate, and excel.
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
