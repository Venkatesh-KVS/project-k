import React from "react";
import { styled } from "styled-components";

const CancerScreeningMale = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h4 className="include">Tests included in the package (14)</h4>
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
            <strong>X-Ray Chest PA View</strong>
          </li>
          <li className="points">
            <strong>Ultrasonogram (USG)- Abdomen</strong>
          </li>
          <li className="points">
            <strong>MRI Diffusion - whole body</strong>
          </li>
        </ol>
        <div className="questions">
          <h3 className="question">What is the package for?</h3>
          <p>
            Konnect Cancer Screening - Male package is required for the early
            detection of cancer in males. This package is used to check for the
            presence of colon, prostate, lung, skin, oral cancer, etc. before
            the appearance of any symptoms.
          </p>
          <p>
            Regular screenings can help detect some cancer cells at an early
            stage when they are still small and have not spread. A delay in
            diagnosis causes the cancer to spread to various parts of the body,
            which makes treatment extremely difficult. If detected early,
            cancers such as testicular and prostate cancer can be completely
            treated.
          </p>
          <h3 className="question">Who should opt for this package?</h3>
          <p>
            Men (age 50 and above) should routinely undergo the Konnect Cancer
            Screening - Male package to check for prostate, colon, testicular
            cancer, etc. Additionally, this package is advised for men under 50
            years of age with a family history of certain cancers and risk
            factors for cancer such as:
          </p>
          <ul>
            <li>Smoking</li>
            <li>Previous history of cancer</li>
            <li>Excessive alcohol consumption</li>
            <li>Exposure to certain chemicals or toxins </li>
            <li>
              Infection due to certain viruses such as human papillomavirus{" "}
            </li>
          </ul>
          <h3 className="question">Patient preparation required</h3>
          <p>
            Fasting is not required for undergoing Konnect Cancer Screening-
            Male package.
          </p>
          <p>
            Ensure your healthcare practitioner is aware of what medications or
            dietary supplements you are taking. Ask for details about pre-test
            preparations, and make sure to follow instructions closely.
          </p>
          <h3 className="question">Availability of report</h3>
          <p>
            Konnect Cancer Screening – Male package test reports are available
            within 24 hours after sample collection.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CancerScreeningMale;
const Wrapper = styled.section``;
