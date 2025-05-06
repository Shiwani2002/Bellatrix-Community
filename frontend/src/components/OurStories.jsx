import React from "react";
import "./OurStories.css"; // External CSS file for styling

const stories = [
  {
    name: "Divya Porwal",
    position: "Software Developer at FlipCart",
    image: "/about3.avif",
    achievement:
      "SDE @Flipkart | Ex SWE Intern @Cisco and @Siemens | 70k+ @LinkedIn | Winner- Techgig GeekGoddess | Finalist @Google Girl Hackathon 2023 | Gold Medalist@ICPC Algoqueen 2023 | Knight@Leetcode |Finalist ICPC Algoqueen 2024",
  },
  {
    name: "Shivangi Yadav",
    position: "Software Engineer",
    image: "/about3.avif",
    achievement:
      "Guiding passionate individuals, especially women in tech, has not only allowed me to share knowledge but also learn and grow alongside them. Watching mentees transform their ideas into action and overcome challenges with confidence has been truly inspiring. This community fosters collaboration, innovation, and empowerment, and I’m proud to be part of a space that uplifts and celebrates growth at every step.",
   
   
  },
  {
    name: "Urvija Singh",
    position: "Software Developer",
    image: "/about3.avif",
    achievement:
      "Guiding passionate individuals, especially women in tech, has not only allowed me to share knowledge but also learn and grow alongside them. Watching mentees transform their ideas into action and overcome challenges with confidence has been truly inspiring. This community fosters collaboration, innovation, and empowerment, and I’m proud to be part of a space that uplifts and celebrates growth at every step.",
  },
  {
    name: "Nishu Gupta",
    position: "Software Engineer",
    image: "/about3.avif",
    achievement:
      "Built the Bellatrix community platform, connecting women in tech worldwide. Organized multiple hackathons and networking events.",
   
   
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
