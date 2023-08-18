import React, { useState } from "react";
import { styled } from "styled-components";

import ToggleKT from "../functionalComponents/ToggleKT";
import ToggleKHP from "../functionalComponents/ToggleKHP";
import ToggleKLT from "../functionalComponents/ToggleKLT";
import ToggleKL from "../functionalComponents/ToggleKL";

const SectionTwo = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <Wrapper>
      <div className="s2">
        <div className="s2-tests-container container">
          <div className="k-btns d-flex gap-3 justify-content-between">
            <button
              className="k-btn btn-kt"
              onClick={() => handleButtonClick("ToggleKT")}
            >
              Search Tests
            </button>
            <button
              className="k-btn"
              onClick={() => handleButtonClick("ToggleKHP")}
            >
              Health Packages
            </button>
            <button
              className="k-btn"
              onClick={() => handleButtonClick("ToggleKLT")}
            >
              Frequently ordered Tests
            </button>
            <button
              className="k-btn"
              onClick={() => handleButtonClick("ToggleKL")}
            >
              Locations
            </button>
          </div>
          <div className="s2-selection-box d-flex gap-2">
            {activeComponent === "ToggleKT" && <ToggleKT />}
            {activeComponent === "ToggleKHP" && <ToggleKHP />}
            {activeComponent === "ToggleKLT" && <ToggleKLT />}
            {activeComponent === "ToggleKL" && <ToggleKL />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.section`
  .s2 {
    /* margin-top: -5%; */
    margin: 2rem;
  }

  .s2-tests-box {
    font-weight: 500;
    /* background: ${({ theme }) => theme.colors.primary}; */
  }
  .s2-tests-container {
    background-image: url("/konnect/images/k-10.png");
    /* linear-gradient(190deg, #005bab, #00aeef); */
    background-repeat: repeat;
    background-size: auto;
    background-position: center left;
    padding: 25px;
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 50;
  }
  .k-btn {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    width: 300px;
    padding: 10px 32px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
      background-color: ${({ theme }) => theme.colors.primary90};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
