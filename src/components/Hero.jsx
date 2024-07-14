import React from "react";
import "./css/hero.css";
import illustration from "../assets/images/illustration-mockups.svg";

function Hero() {
  return (
    <div className="hero-wrapper">
      <figure className="logo-container">
        <img src={illustration} alt="illustration" className="hero-img" />
      </figure>
      <section className="hero-text-container">
        <h1 className="hero-title">Build The Community Your Fans Will Love</h1>
        <p className="hero-parag">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a className="hero-CTA">Register</a>
      </section>
    </div>
  );
}

export default Hero;
