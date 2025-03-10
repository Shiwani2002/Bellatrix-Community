import React from "react";
 import "./Eventsphoto.css"; // External CSS for styling

const Eventsphoto = () => {
  const eventImages = [
    "/1.jpg",
    "/1.1.jpg",
    "/2.jpg",
    "/1.2.jpg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/12.jpg",
    "/11.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg",
    "/17.jpeg",
    "/18.jpeg",
    "/19.jpg",
    "/20.jpeg",
    "/21.jpeg",
    "/22.jpeg",
    "/23.jpeg",
    "/24.jpeg",
    "/25.jpeg",
  ]; // Add event image paths here

  return (
    <div className="events-photo-container">
      {/* Left Section with Heading */}
      <div className="events-photo-header">
        <h2>Some Glimpses of Our Events & Winners</h2>
      </div>

      {/* Grid of Photos */}
      <div className="events-photo-grid">
        {eventImages.map((image, index) => (
          <div key={index} className="photo-card">
            <img src={image} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventsphoto;
