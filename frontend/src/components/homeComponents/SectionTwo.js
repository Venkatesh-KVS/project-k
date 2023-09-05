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
      <div className="s2 mx-auto">
        <div className="s2-tests-container container">
          <div className="k-btns d-flex justify-content-center">
            <button
              className={`k-btn ${
                activeComponent === "ToggleKT" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("ToggleKT")}
            >
              Search Tests
            </button>
            <button
              className={`k-btn ${
                activeComponent === "ToggleKHP" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("ToggleKHP")}
            >
              Health Packages
            </button>
            <button
              className={`k-btn ${
                activeComponent === "ToggleKLT" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("ToggleKLT")}
            >
              Frequently ordered Tests
            </button>
            <button
              className={`k-btn ${
                activeComponent === "ToggleKL" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("ToggleKL")}
            >
              Locations
            </button>
          </div>
          <div className="s2-selection-box d-flex justify-content-center gap-2 p-3 px-5">
            {activeComponent === "ToggleKT" && (
              <ToggleKT handleClick={handleClick} />
            )}
            {activeComponent === "ToggleKHP" && (
              <ToggleKHP handleClick={handleClick} />
            )}
            {activeComponent === "ToggleKLT" && (
              <ToggleKLT handleClick={handleClick} />
            )}
            {activeComponent === "ToggleKL" && (
              <ToggleKL handleClick={handleClick} />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.section`
  .s2 {
    ${"" /* width: 1000px; */}
    ${"" /* margin: 3rem auto; */}
    z-index: 10;
  }

  .s2-tests-box {
    font-weight: 500;
  }
  .s2-tests-container {
    background-image: url("/images/k-10.png");
    background-repeat: repeat;
    background-position: center left;
    padding: 50px 0;
    ${"" /* border-radius: 25px; */}
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 50;
  }
  .k-btn {
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin: 5px;
    transition: 0.5s;
    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 25px 0px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    ${"" /* box-shadow: 0px 8px 8px ${({ theme }) => theme.colors.primary}; */}
    box-shadow: ${({ theme }) => theme.colors.primary} 0px 20px 30px -10px;
  }
`;
