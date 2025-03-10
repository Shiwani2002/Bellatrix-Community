import React from "react";
import Hero from "../components/Hero";
import JobContent from "../components/JobContent"; // Import the new component
import OurStories from "../components/OurStories";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Explore Opportunities & Stay Updated with Our Community!"}
        imageUrl={"/whoweare.png"}
      />
      <JobContent /> {/* Add the new component here */}
      <OurStories /> 
    </>
  );
};

export default AboutUs;

