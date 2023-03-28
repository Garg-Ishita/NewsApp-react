import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/Garg-Ishita" target="__blank">
         Ishita Garg
        </a>
      </span>
      <hr style={{ width: "100%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="insta" className="footer-img"/>
        </a>
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png" alt="linkedin" className="footer-img"/>
        </a>
     
      </div>
    </div>
  );
};

export default Footer;