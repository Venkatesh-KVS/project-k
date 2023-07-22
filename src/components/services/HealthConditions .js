import React from "react";
import { styled } from "styled-components";
import HcCard from "./HcCard";

const HealthConditions = () => {
  return (
    <Wrapper>
      <div className="container health-conditions">
        <h1>Health Conditions</h1>
      </div>
      <HcCard />
    </Wrapper>
  );
};

export default HealthConditions;
const Wrapper = styled.section`
  .health-conditions {
    text-align: center;
    margin: 2rem auto;
    h1 {
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 2rem;
      /* color: ${({ theme }) => theme.colors.text}; */
    }
  }
`;
