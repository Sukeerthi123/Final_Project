import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3 style={{color:"yellow"}}>Contact Us</h3>
        <ul>
          
          <li>
            Contact Number: 1234567890</li>
          <li>Address: abc street</li>
          <li>Email: LittleLemon@gmail.com</li>
        </ul>
      </nav>
      <nav>
        <h3 style={{color:"yellow"}}>Working Hours</h3>
        <ul>
          <li>Monday - Sunday: 9:00AM - 22:00PM</li>
          <li>Online Delivery Option is also available</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;