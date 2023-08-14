import React from "react";
import { styled } from "styled-components";

const CancerScreeningMale = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          All men should be screened for prostate cancer, colon cancer, and
          testicular cancer periodically, especially if there is a family
          history of these or any other cancer type. Screening tests look for
          cancer before a person has any signs or symptoms.
        </p>
        <ol>
          <li className="points">
            <strong>Alpha Fetoprotein (AFP) </strong>
          </li>

          <li className="points">
            <strong>Beta HCG </strong>
          </li>
          <li className="points">
            <strong>Carcino Embryonic Antigen (CEA)</strong>
          </li>
          <li className="points">
            <strong>CA - 19.9 (Pancreatic Cancer Marker) </strong>
          </li>
          <li className="points">
            <strong>Thyroglobulin levels </strong>
          </li>
          <li className="points">
            <strong>Prostate Specific Antigen (PSA) </strong>
          </li>
          <li className="points">
            <strong>Occult Blood, stool </strong>
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
            <strong>Urine Analysis X-Ray Chest PA </strong>
          </li>
          <li className="points">
            <strong>View Ultrasonogram (USG)- Abdomen </strong>
          </li>
          <li className="points">
            <strong>MRI Diffusion - whole body</strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default CancerScreeningMale;
const Wrapper = styled.section``;
