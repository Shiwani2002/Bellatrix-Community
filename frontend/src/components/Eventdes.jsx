import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Eventdes.css"; // Import external CSS

const Eventdes = () => {
  const eventImages = [
   
    "/day1.jpeg",
    "/event.jpeg",
    "/day2.jpeg",
    "/event.jpeg",
  ]; // Add event image paths here

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <div className="event-container">
      {/* Heading */}
      <h1 className="event-heading">Our Events</h1>

      {/* Carousel Section */}
      <div className="event-carousel-container">
        <Carousel responsive={responsive} autoPlay infinite>
          {eventImages.map((image, index) => (
            <div key={index} className="event-carousel-item">
              <img src={image} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content Section */}
      <div className="event-content-section">
        <div className="event-text">
          <h2>Empowering Women in Tech</h2>
          <p>
            Bellatrix Community is dedicated to providing a platform for women in tech to learn, grow, and connect.
            Through interactive workshops, hackathons, mentorship programs, and networking events, we empower 
            future female technologists to excel in the industry.Bellatrix Community is dedicated to providing a platform for women in tech to learn, grow, and connect.
            Through interactive workshops, hackathons, mentorship programs, and networking events, we empower 
            future female technologists to excel in the industry.
            Bellatrix Community is dedicated to providing a platform for women in tech to learn, grow, and connect.
            Through interactive workshops, hackathons, mentorship programs, and networking events, we empower 
            future female technologists to excel in the industry.Bellatrix Community is dedicated to providing a platform for women in tech to learn, grow, and connect.
            Through interactive workshops, hackathons, mentorship programs, and networking events, we empower 
            future female technologists to excel in the industry.
            Bellatrix Community is dedicated to providing a platform for women in tech to learn, grow, and connect.
            Through interactive workshops, hackathons, mentorship programs, and networking events, we empower 
            future female technologists to excel in the industry.Bellatrix Community is dedicated to providing a platform for women in tech to learn, grow, and connect.
            Through interactive workshops, hackathons, mentorship programs, and networking events, we empower 
            future female technologists to excel in the industry.
          </p>
        </div>
       
         
     
      </div>
    </div>
  );
};

export default Eventdes;
