import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import AllMembers from "../components/AllMembers"; // Importing AllMembers component
const Appointment = () => {
  return (
    <>
      <Hero
        title={"Meet Our Members | Explore and Connect with Inspiring Tech Enthusiasts!🚀"}
        imageUrl={"/signin.png"}
      />
       <AllMembers /> {/* Added AllMembers component */}
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
