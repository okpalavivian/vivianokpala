import React from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <div className="Header">
      <img src="https://i.postimg.cc/RZhFQm0J/site-logo.png" className="logo" />
      <ul className="login-menu">
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};

export default Header1;
