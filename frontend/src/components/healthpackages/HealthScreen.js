import React from "react";
import { styled } from "styled-components";

const HealthScreen = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          Basic Health Check-up Package can help in diagnosing conditions at an
          early stage and preventing complications related to them. It includes
          a unique diagnostic profile of tests for a health evaluation. This
          package is suitable for males and females of all age groups.
        </p>
        <ol>
          <li className="points">
            <strong>Complete Blood Picture (CBP)</strong>
          </li>
          <li className="points">
            <strong>Fasting Blood Sugar (FBS)</strong>
          </li>
          <li className="points">
            <strong>Glycosylated Hemoglobin (HBA1C)</strong>
          </li>
          <li className="points">
            <strong>Kidney Function Test</strong>
            <ul className="inner-ul">
              <li>Serum Creatinine</li>
              <li>Blood urea</li>
            </ul>
          </li>
          <li className="points">
            <strong>Lipid Profile</strong>
            <ul className="inner-ul">
              <li>HDL Cholesterol</li>
              <li>VLDL Cholesterol</li>
              <li>Triglycerides</li>
            </ul>
          </li>
          <li className="points">
            <strong>TSH</strong>
          </li>
          <li className="points">
            <strong>CUE</strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default HealthScreen;
const Wrapper = styled.section``;
