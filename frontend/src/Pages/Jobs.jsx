import React from "react";
import "./OpportunityPage.css"; // Common styling for all pages

const resources = [
  {
    name: "Arsh Goyal (Telegram)",
    description: "Managed by Arsh Goyal",
    link: "https://t.me/goyalarsh"
  },
  {
    name: "Krishan Kumar (Telegram)",
    description: "Managed by Krishan Kumar",
    link: "https://t.me/jobs_and_internships_updates"
  },
  {
    name: "Kushal Vijay (Telegram)",
    description: "Managed by Kushal Vijay",
    link: "https://t.me/vijaykushal"
  },
  {
    name: "Akanksha Buchke's (Telegram)",
    description: "Managed by Akanksha Buchke's",
    link: "https://t.me/akankshaBuchkeFreshersJobs"
  },
  {
    name: "Sanika (Telegram)",
    description: "Managed by Sanika",
    link: "https://t.me/get_job_with_sanika"
  }
];

const Jobs = () => {
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

export default Jobs;
