import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Project from "./Project";
import ContactMe from "./ContactMe";
import Education from "./Education";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Education />
      <Project />
      <ContactMe />
    </div>
  );
};

export default Main;
