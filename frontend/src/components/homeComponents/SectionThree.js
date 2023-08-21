import React from "react";
import styled from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";

const SectionThree = () => {
  return (
    <Wrapper>
      <div className="s3-full">
        <div className="services">
          <div className="container d-flex justify-content-between">
            <div className="s3-s service1">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/location.svg"} />
              </div>
              <h5>Nearest Center</h5>
            </div>
            <div className="s3-s service2">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/Lab.svg"} />
              </div>
              <h5>Booka a test</h5>
            </div>
            <div className="s3-s service2">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/house.svg"} />
              </div>
              <h5>Home Collections</h5>
            </div>
            <div className="s3-s service3">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/Prescription.svg"} />
              </div>
              <h5>Upload Prescription</h5>
            </div>
            <div className="s3-s service4">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/download-report.svg"} />
              </div>
              <h5>Download Report</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="secThree container d-flex">
        <div
          className="why-konnect-img"
          style={{
            backgroundImage: `url(/konnect/images/s3-img-left.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "60%",
          }}
        >
          <div className="why-konnect-content">
            <div className="title">
              <h3>Why Konnect</h3>
            </div>
            <div className="info d-flex gap-2">
              {/* <DynamicImage
                className="secThree-info-icon"
                imageName={"/icons/house-white.svg"}
              /> */}
              <h3>Empowering Health through Precision</h3>
            </div>
          </div>
        </div>

        <div className="secThree-info d-flex">
          <div className="sti secThree-info-one d-flex">
            <DynamicImage
              className="secThree-info-icon"
              imageName={"/icons/home/certified.svg"}
            />
            <p>
              Konnect Diagnostics offers precise diagnostics with certified
              radiologists, pathologists, doctors, and technicians .
            </p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/home/team.svg"} />

            <p>
              Pioneering tech, skilled team drive us in advanced diagnostics,
              managing complex cases with expertise.
            </p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/home/top.svg"} />
            <p>
              Our priority: satisfied patients. Swift, transparent, precise
              top-quality services for convenience and rapid results.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionThree;

const Wrapper = styled.section`
  .why-konnect-img {
    position: relative;

    .why-konnect-content {
      position: absolute;
      padding: 25px;
      border-radius: 15px;
      background-image: url(/konnect/images/k-10.png),
        linear-gradient(90deg, #00ffbb, #005bab95);
      background-size: contain;
      background-repeat: no-repeat;
      left: 5%;
      bottom: 5%;
      color: white;
      .title h3 {
        color: white;
        font-size: 1%.5;
      }
      .info {
        margin-top: 1rem;
        img {
          width: 35px;
          height: 100%;
        }
        h3 {
          color: ${({ theme }) => theme.colors.white};
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }
  .services {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 4rem 0 15rem 0;
  }
  .secThree {
    margin-top: -12rem;
  }
  .secThree-info {
    .sti {
      align-items: center;
      img {
        width: 2rem;
      }
      p {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
  .s3-s {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    .s3-icons {
      background-color: #fff;
      border-radius: 100px;
      padding: 1.5rem;
      height: 100px;
      width: 100px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
    }
    h5 {
      color: #fff;
      font-size: 1.125rem;
    }
    &:hover .s3-icons {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    &:hover img {
      scale: 1.2;
    }
  }
`;
