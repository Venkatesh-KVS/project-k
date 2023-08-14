import React from "react";
import { styled } from "styled-components";

const WellWomenPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          This comprehensive package checks the possible causes of major
          ailments in women including some basic cancer screening tests to give
          an overall idea about their present health status.
        </p>
        <ol>
          <li className="points">
            <strong>Complete Blood Picture (CBP)</strong>
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
            <strong>Lipid Profile</strong>
            <ul className="inner-ul">
              <li>Total Cholesterol</li>
              <li>HDL Cholesterol</li>
              <li>VLDL Cholesterol</li>
              <li>Triglycerides</li>
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
            <strong>Thyroid Profile </strong>
            <ul className="inner-ul">
              <li>Serum Triiodothyronine(T3) </li>
              <li>Serum Thyroxine(T4) </li>
              <li>Thyroid Stimulating Hormone (TSH) </li>
            </ul>
          </li>

          <li className="points">
            <strong>Serum Calcium </strong>
          </li>
          <li className="points">
            <strong>Vitamin B12 </strong>
          </li>
          <li className="points">
            <strong>Vitamin D </strong>
          </li>
          <li className="points">
            <strong>Serum Iron </strong>
          </li>
          <li className="points">
            <strong>Total Iron Binding Capacity (TIBC) </strong>
          </li>
          <li className="points">
            <strong>Serum Phosphorus </strong>
          </li>
          <li className="points">
            <strong>PAP Smear </strong>
          </li>
          <li className="points">
            <strong>Digital Mammography </strong>
          </li>
          <li className="points">
            <strong>ECG </strong>
          </li>
          <li className="points">
            <strong>Ultrasound Abdomen </strong>
          </li>
          <li className="points">
            <strong>X-Ray Chest PA View </strong>
          </li>
          <li className="points">
            <strong>Specialist Consultation </strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default WellWomenPackage;
const Wrapper = styled.section``;
