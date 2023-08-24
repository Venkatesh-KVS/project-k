import React, { useState } from "react";
import { styled } from "styled-components";

import ToggleKT from "../functionalComponents/ToggleKT";
import ToggleKHP from "../functionalComponents/ToggleKHP";
import ToggleKLT from "../functionalComponents/ToggleKLT";
import ToggleKL from "../functionalComponents/ToggleKL";

const SectionTwo = ({ handleClick }) => {
  const [activeComponent, setActiveComponent] = useState("ToggleKT");

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
            {activeComponent === "ToggleKT" && (
              <ToggleKT handleClick={handleClick} />
            )}
            {activeComponent === "ToggleKHP" && (
              <ToggleKHP handleClick={handleClick} />
            )}
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
    margin: 3rem auto;
    z-index: 10;
  }

  .s2-tests-box {
    font-weight: 500;
  }
  .s2-tests-container {
    background-image: url("/images/k-10.png");
    background-repeat: repeat;
    background-size: auto;
    background-position: center left;
    padding: 50px;
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 50;
  }
  .k-btn {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    /* background-color: ${({ theme }) => theme.colors.white}; */
    background-image: url(/images/k-10.png),
      linear-gradient(90deg, #00ffbb90, #005bab90);
    background-size: contain;
    background-repeat: no-repeat;
    width: 300px;
    padding: 10px;
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
