import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Bellatrix Community is a dynamic platform dedicated to empowering women in tech 
          through mentorship, education, and opportunities. Our mission is to equip aspiring female 
          technologists with the skills, confidence, and network they need to thrive in the industry.
           Through interactive learning, hands-on projects, and community-driven events, we create an 
           environment where innovation meets empowerment
          . At Bellatrix, we are building a future where women lead, create, and inspire in the world of
           technology. 🚀
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
