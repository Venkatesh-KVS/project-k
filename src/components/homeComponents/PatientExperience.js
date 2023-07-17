import React from "react";
import styled from "styled-components";
// import DynamicImage from "../requiredPages/DynamicImage";
import { patientStoryData } from "../data/AllData";
import { BiSolidQuoteRight } from "react-icons/bi";

const PatientExperience = () => {
  return (
    <Wrapper>
      <div className="pe container">
        <div className="peTitle">
          <h2>The Patient Experience</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="peContent">
          <div className="pe-left">
            {patientStoryData.map((patient, index) => (
              <div className="patients">
                <div
                  className="patientImage"
                  style={{
                    backgroundImage: `url(${patient.src})`,
                    backgroundSize: "cover",
                    width: "80px",
                    height: "80px",
                  }}
                ></div>
                <div className="patientInfo">
                  <h5>{patient.name}</h5>
                  <p>{patient.info}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="pe-right"
            style={{
              background: `url("/project-konnect/images/patient1.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="patientStory-box">
              <div className="patientStory">
                <h5>Patient Story</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam,
                </p>
                <span>
                  <BiSolidQuoteRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PatientExperience;

const Wrapper = styled.section`
  .peTitle {
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 5rem 0 2rem 0;
    h2 {
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 0px;
    }
  }
  .peContent {
    height: 400px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 3rem;
    .pe-left {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      overflow-y: scroll;
      direction: rtl;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 5px;
        box-shadow: inset 0 0 7px #11010125;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 10px;
        &:hover {
          background: ${({ theme }) => theme.colors.secondary};
        }
      }

      .patients {
        direction: ltr;
        /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
        margin: 0 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 10px 0px;
        padding: 15px;
        margin: 5px 25px;
        border-radius: 5px;
        display: flex;
        gap: 15px;
        &:focus {
          background-color: ${({ theme }) => theme.colors.primary};
        }

        .patientImage {
          width: 85px;
          height: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          border: 2px solid ${({ theme }) => theme.colors.primary};
        }
        .patientInfo {
          /* display: flex;
          flex-direction: column; */
          h5 {
            font-size: 1.1rem;
            font-weight: 700;
          }
          p {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
    }
    .pe-right {
      width: 65%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 10px 0px;
      padding: 25px;
      margin-top: 5px;
      border-radius: 10px;
      /* background-color: aquamarine; */
      position: relative;
      .patientStory-box {
        position: absolute;
        top: 0;
        right: 50px;
        width: 40%;
        background-color: ${({ theme }) => theme.colors.primary90};
        .patientStory {
          overflow: hidden;
          margin: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          /* text-align: center; */
          gap: 10px;
          h5 {
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 1rem;
          }
          h5,
          span {
            padding: 5px 10px;
            position: relative;
            overflow: visible;
            background-color: ${({ theme }) => theme.colors.white};
            &::before,
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              right: 100%;
              transform: translate(0, -100%) !important;
              background-color: ${({ theme }) => theme.colors.white};
              width: 100%;
              height: 1px;
            }
            &:after {
              content: "";
              left: 100%;
            }
          }
          span {
            background-color: transparent;
            svg {
              width: 25px;
              height: 25px;
              /* padding: 0px; */

              fill: ${({ theme }) => theme.colors.white};
            }
            &::before,
            &::after {
              width: 100px;
            }
          }
          p {
            color: ${({ theme }) => theme.colors.white};
            font-size: 0.9375rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
