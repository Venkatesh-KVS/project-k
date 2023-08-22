import React from "react";
import { styled } from "styled-components";

const CancerScreeningFemale = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h4 className="include">Tests included in the package (17)</h4>

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
        <div className="questions">
          <h3 className="question">What is the Package for?</h3>
          <p>
            Konnect Cancer Screening-Female helps in the early detection of
            ovarian, breast, pancreatic cancer, etc. This package also
            identifies cancerous cells before an individual experiences
            symptoms. It is possible to cure cancer if it is detected at an
            early stage. So, there is a need to undergo this package once a
            year, if you are at a risk of developing cancer. Additionally, it
            can also help healthcare professionals to provide early diagnosis
            and effective treatment plans for that specific cancer.
          </p>
          <h3 className="question">This package is recommended for:</h3>
          <p>Konnect Cancer Screening is recommended for women who are:</p>
          <ul>
            <li>Aging ( above 40 years)</li>
          </ul>
          <ul>
            <li>Overweight and obese</li>
          </ul>
          <ul>
            <li>Having a history of any infectious disease </li>
          </ul>
          <ul>
            <li>Having a history of Polycystic Ovarian Syndrome (PCOS) </li>
          </ul>
          <ul>
            <li>Leading a sedentary lifestyle</li>
          </ul>
          <ul>
            <li>Having a history of radiation exposure</li>
          </ul>
          <ul>
            <li>Having a history of exposure to sun and tanning beds</li>
          </ul>
          <ul>
            <li>Consuming alcohol and smoking </li>
          </ul>
          <ul>
            <li>Having a family history of cancers</li>
          </ul>
          <h3>Patient Preparation required</h3>
          <p>
            No special preparation is required to undergo cancer screening.
            However, it is advisable to avoid smoking, or consuming any herbal
            dietary supplements, and to consult your healthcare provider before
            undergoing the screening.
          </p>
          <h3>Availability of report </h3>
          <p>
            Konnect Cancer Screening test reports are available within 24 hours
            after the collection of samples.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CancerScreeningFemale;
const Wrapper = styled.section``;
