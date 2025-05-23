import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import QnAComponent from "../components/QnAComponent";
const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Bellatrix Community | Empowering Innovators, Connecting Opportunities! 🚀"
        }
        imageUrl={"/hero.png"}
      /> 
      <Biography imageUrl={"/about3.avif"} />
      <Departments />
      <MessageForm />
     
<QnAComponent />

    </>
  );
};

export default Home;
