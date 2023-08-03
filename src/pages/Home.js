import React from "react";
import HeroSection from "../components/homeComponents/HeroSection";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";
import SectionFour from "../components/homeComponents/SectionFour";
// // import SectionFive from "./SectionFive";
import HealthPackages from "../components/homeComponents/HealthPackages";
import PatExpCarousel from "../components/homeComponents/PatExpCarousel";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <HealthPackages />

        <PatExpCarousel />
      </div>
    </>
  );
};

export default Home;
