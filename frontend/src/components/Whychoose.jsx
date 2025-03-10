import React from "react";
import "./Whychoose.css"; // External CSS for styling

const WhyChoose = () => {
  const reasons = [
    { title: "Confidence Boost", content: "Gain self-assurance by showcasing your skills in a supportive environment." },
    { title: "Networking", content: "Meet like-minded individuals and expand your professional connections." },
    { title: "Skill Enhancement", content: "Improve your technical and soft skills through real-world challenges." },
    { title: "Mentorship", content: "Learn from industry experts and experienced professionals." },
    { title: "Career Growth", content: "Stand out in job applications with event participation and achievements." },
    { title: "Collaboration", content: "Work with teams, enhance teamwork skills, and build innovative projects." },
    { title: "Recognition", content: "Get acknowledged for your efforts and win exciting rewards." },
    { title: "Problem-Solving", content: "Sharpen your ability to think critically and solve real-world challenges." },
    { title: "Fun & Experience", content: "Enjoy an engaging experience filled with learning and excitement." },
  ];

  return (
    <div className="why-choose-container">
      <h2 className="why-choose-heading">Why You Should Participate in Our Events</h2>
      <div className="circle-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="circle">
            <h3>{reason.title}</h3>
            <p>{reason.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
