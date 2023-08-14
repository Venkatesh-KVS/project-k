import React from "react";
import { styled } from "styled-components";

const ExecutiveHealthCheckup = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          The aim of Executive Health Checkup is to extend the healthy life
          expectancy of population, to avoid untimely death and to improve the
          quality of life for people with a disease or disability by
          periodically checking all symptoms in the body.
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
            <strong>Serum Uric Acid </strong>
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
            <strong>Prostate Specific Antigen (Male) </strong>
          </li>
          <li className="points">
            <strong>PAP Smear (Female)</strong>
          </li>
          <li className="points">
            <strong>ECG </strong>
          </li>
          <li className="points">
            <strong>2D Echo </strong>
          </li>
          <li className="points">
            <strong>Ultrasound Abdomen </strong>
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

export default ExecutiveHealthCheckup;
const Wrapper = styled.section``;
