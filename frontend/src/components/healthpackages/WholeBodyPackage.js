import React from "react";
import { styled } from "styled-components";

const WholeBodyPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          A full body check-up generally includes assessments of a person's
          blood pressure, heart rate, breathing rate, temperature, weight, and
          height. It may also include tests to check cholesterol levels, blood
          sugar levels, and the presence of any infections.
        </p>
        <ol>
          <li className="points">
            <strong>Complete Blood Picture (CBP) </strong>
          </li>

          <li className="points">
            <strong>Blood Group & Rh typing </strong>
          </li>
          <li className="points">
            <strong>
              Complete Urine Examination (CUE) Erythrocyte Sedimentation Rate
              (ESR){" "}
            </strong>
          </li>
          <li className="points">
            <strong>Fasting Blood Sugar (FBS) Post Lunch Blood Sugar </strong>
          </li>
          <li className="points">
            <strong>Glycosylated Hemoglobin (HBA1C) </strong>
          </li>
          <li className="points">
            <strong>HbsAg </strong>
          </li>
          <li className="points">
            <strong>Lipid Profile </strong>
            <ul>
              <li>Total Cholesterol </li>
              <li>HDL Cholesterol </li>
              <li>VLDL Cholesterol </li>
              <li>Triglycerides </li>
            </ul>
          </li>
          <li className="points">
            <strong>Kidney Function Test </strong>
            <ul>
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
            </ul>
          </li>
          <li className="points">
            <strong>Liver Function Test (LFT) </strong>
            <ul>
              <li>Total Bilirubin </li>
              <li>Direct Bilirubin SGPT </li>
              <li>SGOT </li>
              <li>Alkaline Phosphatases </li>
              <li>Serum Albumin </li>
              <li>Serum Proteins </li>
              <li>Serum Uric Acid </li>
            </ul>
          </li>
          <li className="points">
            <strong>Thyroid Profile </strong>
            <ul>
              <li>Serum Triiodothyronine(T3) </li>
              <li>Serum Thyroxine (T4) </li>
              <li>Thyroid Stimulating Hormone (TSH) </li>
            </ul>
          </li>
          <li className="points">
            <strong>Prostate Specific Antigen (Male) </strong>
          </li>
          <li className="points">
            <strong>PAP Smear (Female) </strong>
          </li>
          <li className="points">
            <strong>ECG </strong>
          </li>
          <li className="points">
            <strong>2D Echo </strong>
          </li>
          <li className="points">
            <strong>TMT </strong>
          </li>
          <li className="points">
            <strong>Ultrasound Abdomen </strong>
          </li>
          <li className="points">
            <strong>Apolipoprotein A1 </strong>
          </li>
          <li className="points">
            <strong>X-Ray </strong>
          </li>
          <li className="points">
            <strong>Chest PA View </strong>
          </li>
          <li className="points">
            <strong>Iron Profile </strong>
          </li>
          <li className="points">
            <strong>HS-CRP </strong>
          </li>
          <li className="points">
            <strong>Doctor Consultation </strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default WholeBodyPackage;
const Wrapper = styled.section``;
