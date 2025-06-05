import React from "react";
import "./OpportunityPage.css";

 // Common styling for all pages

const resources = [
  {
   name: "Krishan Kumar (Telegram)",
    description: "Managed by Krishan Kumar",
    link: "https://t.me/jobs_and_internships_updates"
  },
  {
    name: "Jobs Internships",
    description: "Managed by jobs Internships",
    link: "https://t.me/jobsinternshipswale"
  },
  {
    name: "Off campus",
    description: "Managed by off campus phodenge",
    link: "https://t.me/offcampus_phodenge"
  },
  {
    name: "Placement",
    description: "Managed by palcement",
    link: "https://t.me/off_campus_jobs_and_internships"
  },
  
];

const Internships = () => {
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


export default Internships;
