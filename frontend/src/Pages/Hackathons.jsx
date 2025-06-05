import React from "react";
import "./OpportunityPage.css"; // Common styling for all pages

const resources = [
  {
    name: "Hackathon Hub ",
    description: "Created by unstop",
    link: "https://unstop.com/"
  },
  {
    name: "Hackathons Hub",
    description: "Managed by GFG",
    link: "https://www.geeksforgeeks.org/"
  },

];

const Hackathon = () => {
  return (
    <div className="hackathon-container">
      <h2 className="hackathon-heading">
        Join all the resources to find daily hackathon updates!
      </h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-box">
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathon;
