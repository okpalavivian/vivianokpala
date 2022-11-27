import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src="https://i.postimg.cc/L6Vx6HTL/github.png" alt="Github" />
          <img
            src="https://i.postimg.cc/Fzz0r4sg/instagram.png"
            alt="instagram"
          />
          <img
            src="https://i.postimg.cc/K86f0RvX/linkedin.png"
            alt="linkedIn"
          />
        </div>
        <div className="logo-f">
          <img src="https://i.postimg.cc/Y2PdvnKq/site-logo.png" alt="logo" />
        </div>
      </div>
      <div className="footer-terms">
        <span>@copyright 2022 Healthplug</span>
        <span>Terms and Conditions </span>
        <span>Privacy policy</span>
        <span>Contact</span>
        <span>Email</span>
        <span>Work/Write with us</span>
      </div>
    </div>
  );
};

export default Footer;
