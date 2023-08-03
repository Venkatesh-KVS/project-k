import React from "react";
import HeroSection from "./HeroSection";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
// import SectionFive from "./SectionFive";
import HealthPackages from "./HealthPackages";
import PatientExperience from "./PatientExperience";
import PatExpCarousel from "./PatExpCarousel";

const Home = () => {
  return (
    <div>
      <div className="">
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <HealthPackages />
        {/* <SectionFive /> */}
        {/* <PatientExperience /> */}
         <PatExpCarousel /> 
      </div>
    </div>
  );
};

export default Home;
