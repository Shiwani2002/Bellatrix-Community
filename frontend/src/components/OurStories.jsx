import React from "react";
import "./OurStories.css"; // External CSS file for styling

const stories = [
  {
    name: "Neha Sharma",
    position: "Web Developer",
    image: "/about3.avif",
    achievement:
      "Built the Bellatrix community platform, connecting women in tech worldwide. Organized multiple hackathons and networking events.",
  },
  {
    name: "Aisha Khan",
    position: "Software Engineer at Google",
    image: "/about3.avif",
    achievement:
      "Secured a role at Google after participating in multiple coding competitions. Mentors aspiring developers globallly   t Google after participating in multiple coding competitions. Mentors aspiring developers globally.   t Google after participating in multiple coding competitions. Mentors aspiring developers globally.",
   
   
  },
  {
    name: "Rohan Mehta",
    position: "Data Scientist at Microsoft",
    image: "/about3.avif",
    achievement:
      "Led an AI research project that helped optimize data processing, saving 30% in computation time.",
  },
  {
    name: "Aisha Khan",
    position: "Software Engineer at Google",
    image: "/about3.avif",
    achievement:
      "Secured a role at Google after participating in multiple coding competitions. Mentors aspiring developers globallly   t Google after participating in multiple coding competitions. Mentors aspiring developers globally.   t Google after participating in multiple coding competitions. Mentors aspiring developers globally.",
   
   
  },
  {
    name: "Aisha Khan",
    position: "Software Engineer at Google",
    image: "/about3.avif",
    achievement:
      "Secured a role at Google after participating in multiple coding competitions. Mentors aspiring developers globallly   t Google after participating in multiple coding competitions. Mentors aspiring developers globally.   t Google after participating in multiple coding competitions. Mentors aspiring developers globally.",
   
   
  },
];

const OurStories = () => {
  return (
    <div className="our-stories-container">
      <h1 className="our-stories-heading">Some Stories of Our Past Bellatrix Leaders & How They Achieved Success</h1>

      {stories.map((story, index) => (
        <div
          key={index}
          className={`story-box ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="story-image">
            <img src={story.image} alt={story.name} />
          </div>
          <div className="story-content">
            <h2>{story.name}</h2>
            <h4>{story.position}</h4>
            <p>{story.achievement}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurStories;
