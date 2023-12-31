import React from "react";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";
import SectionFour from "../components/homeComponents/SectionFour";
import HealthPackages from "../components/homeComponents/HealthPackages";
// import PatExpCarousel from "../components/homeComponents/PatExpCarousel";
import HeroSlider from "../components/homeComponents/HeroSlider";
import PatientExperience from "../components/homeComponents/PatientExperience";
import OurHistory from "../components/homeComponents/OurHistory";
import CounterBox from "../components/homeComponents/CounterBox";

const Home = ({ handleClick }) => {
  return (
    <>
      <div>
        <HeroSlider />
        <SectionTwo handleClick={handleClick} />
        <SectionThree />
        <SectionFour handleClick={handleClick} />
        <HealthPackages handleClick={handleClick} />
        <CounterBox />
        <PatientExperience />
        <OurHistory />
      </div>
    </>
  );
};

export default Home;
