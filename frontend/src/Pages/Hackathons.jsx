import React from "react";
import "./OpportunityPage.css"; // Common styling for all pages

const resources = [
  {
    name: "Hackathon Hub (Telegram)",
    description: "Created by XYZ Community . yes we knor sbjdbs sdbhbd bc cdugbc dchdu dcus sgduy dbcushui",
    link: "https://t.me/example"
  },
  {
    name: "Daily Hackathons (WhatsApp)",
    description: "Managed by ABC Group",
    link: "https://chat.whatsapp.com/example"
  },
  {
    name: "Hackathon Insights (YouTube)",
    description: "By TechGeeks",
    link: "https://www.youtube.com/c/example"
  },
  {
    name: "Daily Hackathons (WhatsApp)",
    description: "Managed by ABC Group",
    link: "https://chat.whatsapp.com/example"
  },
  {
    name: "Hackathon Insights (YouTube)",
    description: "By TechGeeks",
    link: "https://www.youtube.com/c/example"
  }
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