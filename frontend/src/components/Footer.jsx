import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo2.webp" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <Link to={"https://chat.whatsapp.com/KLSLRkprvngHMWutCTIKO6"}>WhatsApp</Link>
              <Link to={"https://chat.whatsapp.com/KLSLRkprvngHMWutCTIKO6"}>Instagram</Link>
              <Link to={"https://chat.whatsapp.com/KLSLRkprvngHMWutCTIKO6"}>Our website</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>Shiwani Tiwari 9696294742</span>
            </div>
            <div>
              <FaPhone />
              <span>Shiwani Tiwari 9696294742</span>
            </div>
            <div>
              <FaPhone />
              <span>Shiwani Tiwari 9696294742</span>
            </div>
            <div>
              <FaPhone />
              <span>Shiwani Tiwari 9696294742</span>
            </div>
            <div>
              <MdEmail />
              <span>bellatrix12@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Sultanpur, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
