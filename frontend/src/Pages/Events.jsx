import React from "react";
import Hero from "../components/Hero";

import Eventdes from "../components/Eventdes"; // Importing AllMembers component
import Whychoose from "../components/Whychoose";
import Eventsphoto from "../components/Eventsphoto";
import Message from "../components/Message";
const Events = () => {
  return (
    <>
     <Eventdes />  
    <Whychoose/>
    <Eventsphoto/>
    <Message />
    </>
  );
};

export default Events;