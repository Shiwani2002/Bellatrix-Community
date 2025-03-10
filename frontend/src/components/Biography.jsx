import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Bellatrix is a community dedicated to empowering girls in the tech field. 
          We provide teaching, mentorship, and classes to help them grow in their careers.
           Our community also organizes events and competitions, giving members opportunities to learn,
           network, and showcase their skills. Join us and be a part of a supportive space
            where innovation and learning thrive! 🚀
          </p>
          <p>We are all in 2024!</p>
          <p>"Empowering Women in Tech to Stand Out and Lead the Future!" 🚀.</p>
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

export default Biography;
