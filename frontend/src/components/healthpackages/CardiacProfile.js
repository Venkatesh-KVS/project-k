import React from "react";
import { styled } from "styled-components";

const CardiacProfile = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          The cardiac profile is a comprehensive panel of tests that is used to
          check the overall functioning of the heart. By looking at the
          concentration of fats, certain enzymes, and the composition of urine
          and blood, it becomes easier for clinicians to evaluate the health of
          your heart.
        </p>
        <ol>
          <li className="points">
            <strong>Complete Blood Picture (CBP)</strong>
          </li>
          <li className="points">
            <strong>Blood Group & Rh typing </strong>
          </li>
          <li className="points">
            <strong>Complete Urine Examination (CUE) </strong>
          </li>
          <li className="points">
            <strong>Erythrocyte Sedimentation Rate (ESR)</strong>
          </li>
          <li className="points">
            <strong>Fasting Blood Sugar (FBS)</strong>
          </li>
          <li className="points">
            <strong>Glycosylated Hemoglobin (HBA1C) </strong>
          </li>
          <li className="points">
            <strong>Lipid Profile</strong>
            <ul className="inner-ul">
              <li>Total Cholesterol</li>
              <li>HDL Cholesterol</li>
              <li>VLDL Cholesterol</li>
              <li>Triglycerides</li>
            </ul>
          </li>
          <li className="points">
            <strong>Liver Function Test (LFT)</strong>
            <ul className="inner-ul">
              <li>Total Bilirubin</li>
              <li>Direct Bilirubin </li>
              <li>SGPT</li>
              <li>SGOT</li>
              <li>Alkaline Phosphatases</li>
              <li>Serum Albumin</li>
              <li>Serum Proteins</li>
            </ul>
          </li>
          <li className="points">
            <strong>Kidney Function Test </strong>
            <ul className="inner-ul">
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
            </ul>
          </li>

          <li className="points">
            <strong>ECG </strong>
          </li>
          <li className="points">
            <strong>2D Echo </strong>
          </li>

          <li className="points">
            <strong>X-Ray Chest PA View </strong>
          </li>
          <li className="points">
            <strong>Doctor Consultation</strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default CardiacProfile;
const Wrapper = styled.section``;
