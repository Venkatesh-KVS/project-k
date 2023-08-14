import React from "react";
import { styled } from "styled-components";

const DiabeticPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          Diabetes package includes tests used for screening diabetes in a
          person, monitoring the effectiveness of its treatment process and keep
          a track of the organs such as kidneys and heart, which are most likely
          to get affected due to diabetes.
        </p>
        <ol>
          <li className="points">
            <strong>Complete Blood Picture (CBP)</strong>
          </li>
          <li className="points">
            <strong>Complete Urine Examination (CUE)</strong>
          </li>
          <li className="points">
            <strong>Fasting Blood Sugar (FBS)</strong>
          </li>
          <li className="points">
            <strong>Post Lunch Blood Sugar</strong>
          </li>
          <li className="points">
            <strong>Glycosylated Haemoglobin (HBA1C)</strong>
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
            <strong>Liver Function Test (LFT) Kidney Function Test</strong>
            <ul className="inner-ul">
              <li>Total Bilirubin</li>
              <li>Serum Creatinine</li>
              <li>Direct Bilirubin</li>
              <li>Serum Urea</li>
              <li>SGPT</li>
              <li>Urine Microalbumin</li>
              <li>SGOT</li>
              <li>Alkaline Phosphatases</li>
              <li>Serum Albumin</li>
              <li>Serum Proteins</li>
            </ul>
          </li>
          <li className="points">
            <strong>Thyroid Stimulating Hormone (TSH)</strong>
          </li>
          <li className="points">
            <strong>C-Peptide Levels</strong>
          </li>
          <li className="points">
            <strong>ECG</strong>
          </li>
          <li className="points">
            <strong>Doctor Consultation</strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default DiabeticPackage;
const Wrapper = styled.section``;
