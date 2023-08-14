import React from "react";
import { styled } from "styled-components";

const MasterHealthCheckup = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          A master health check-up includes number of clinical tests utilized to
          assess the overall health of a person. The master health checkup
          includes a physical examination ultrasound and laboratory
          investigations that help evaluate the health of your vital organs and
          metabolism to identify any early symptoms of diseases to manage
          individual health better.
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
            <strong>Erythrocyte Sedimentation Rate (ESR) </strong>
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
              <li>AG Ratio </li>
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
            <strong>Thyroid Profile </strong>
            <ul className="inner-ul">
              <li>Serum Triiodothyronine(T3) </li>
              <li>Serum Thyroxine(T4) </li>
              <li>Thyroid Stimulating Hormone (TSH) </li>
            </ul>
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
            <strong>Doctor Consultation </strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default MasterHealthCheckup;
const Wrapper = styled.section``;
