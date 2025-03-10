import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./JobContent.css"; // External CSS for styling

const JobContent = () => {
  const navigate = useNavigate();

  // Define categories with their navigation paths
  const categories = [
    { name: "Hackathons", image: "https://res.infoq.com/articles/hackathon-developer-innovation/en/headerimage/generatedHeaderImage-1662578814159.jpg", path: "/hackathons" },
    { name: "Internships", image: "https://news.umanitoba.ca/wp-content/uploads/2021/11/Career-Month-3-UM-Today--1200x799.png", path: "/internships" },
    { name: "Jobs", image: "https://www.universityliving.com/blog/wp-content/uploads/2024/06/Internship_-Blog-Banner-1000x419.webp", path: "/jobs" },
    { name: "Other Opportunities", image: "/about3.avif", path: "/others" },
  ];

  return (
    <div className="opportunity-container">
      <h2 className="opportunity-heading">Explore Exciting Opportunities!</h2>
      <div className="opportunity-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="opportunity-box"
            onClick={() => navigate(category.path)}
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobContent;
