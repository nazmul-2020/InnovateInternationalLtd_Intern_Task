import React from "react";
import Navbar from "../shared/Navbar";
import HeroSection from "./HeroSection";
import PhotoSession from "./PhotoSession";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PhotoSession />
    </div>
  );
};

export default HomePage;
