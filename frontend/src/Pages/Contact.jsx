import React, { useContext } from "react";

import Contactus from "../components/Contactus";
import ContactForm  from "../components/ContactForm";


const Home = () => {
  return (
    <> 
      <Contactus imageUrl={"/whoweare.png"} />
      <ContactForm />
    </>
  );
};

export default Home;