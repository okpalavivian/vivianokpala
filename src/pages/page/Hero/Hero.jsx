import React from "react";
import Header1 from "../../page/Header/Header1";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-l">
        <Header1 />
      </div>
      <div className="hero-r">left side</div>
    </div>
  );
};

export default Hero;
