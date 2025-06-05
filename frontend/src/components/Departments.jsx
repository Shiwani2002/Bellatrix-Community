import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Shiwani Tiwari",
      imageUrl: "/departments/shiwani3.jpeg",
    },
    {
      name: "Poorvi Gupta",
      imageUrl: "/departments/Poorvi.jpg",
    },
    {
      name: "Swati Singh",
      imageUrl: "/departments/Swati.jpeg",
    },
    
    {
      name: "Sagun Singh",
      imageUrl: "/departments/Sagun.jpeg",
    },
    {
      name: "Harshita",
      imageUrl: "/departments/Harshita.jpeg",
    },
    {
      name: "Saumya",
      imageUrl: "/departments/Saumya.jpeg",
    },
    {
      name: "Sambhavi",
      imageUrl: "/departments/Sambhavi.jpeg",
    },
    {
      name: "Shreya",
      imageUrl: "/departments/Shreya.jpeg",
    },
    {
      name: "Anshika",
      imageUrl: "/departments/Anshika.jpeg",
    },
    {
      name: "Payal",
      imageUrl: "/departments/Dot.jpeg",
    },
    {
      name: "Kusum",
      imageUrl: "/departments/Kusum.jpeg",
    },
    {
      name: "Nikita",
      imageUrl: "/departments/Nikita.jpeg",
    },
    {
      name: "Rakhi",
      imageUrl: "/departments/Rakhi.jpeg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Leaders And Members</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
