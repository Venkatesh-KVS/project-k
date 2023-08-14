import React from "react";
import { styled } from "styled-components";

const CancerScreeningFemale = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          Clinical Breast Examination: Ideally done by a gynaecologist, it needs
          to be repeated every 2-3 years for women who are in their 30s and
          annually for women 40 & above. Mammogram: This is low dose x-ray test
          done to detect small and early stage breast cancers.
        </p>
        <ol>
          <li className="points">
            <strong>Alpha Feto Protein (AFP) </strong>
          </li>

          <li className="points">
            <strong>Beta HCG </strong>
          </li>
          <li className="points">
            <strong>Carcino Embryonic Antigen (CEA) </strong>
          </li>
          <li className="points">
            <strong>CA-125 (Ovarin Cancer Marker) </strong>
          </li>
          <li className="points">
            <strong>CA-15.3 (Breast Cancer Marker) </strong>
          </li>
          <li className="points">
            <strong>CA - 19.9 (Pancreatic Cancer Marker) </strong>
          </li>
          <li className="points">
            <strong>Thyroglobulin levels </strong>
          </li>
          <li className="points">
            <strong>Occult Blood, stool </strong>
          </li>
          <li className="points">
            <strong>PAP Smear - LBC </strong>
          </li>
          <li className="points">
            <strong>General Body Screen </strong>
          </li>
          <li className="points">
            <strong>Complete Blood Picture </strong>
          </li>
          <li className="points">
            <strong>Erythrocyte Sedimentation Rate (ESR) </strong>
          </li>
          <li className="points">
            <strong>Urine Analysis </strong>
          </li>
          <li className="points">
            <strong>X-Ray Chest PA View </strong>
          </li>
          <li className="points">
            <strong>Ultrasonogram (USG)- Whole Abdomen </strong>
          </li>
          <li className="points">
            <strong>Mammogram </strong>
          </li>
          <li className="points">
            <strong>MRI Diffusion-whole body </strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default CancerScreeningFemale;
const Wrapper = styled.section``;
