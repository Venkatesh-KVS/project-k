import React from "react";
import HpCard from "../requiredPages/HpCard";
import { packagesData } from "../../assets/data/AllData";
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HealthPackages = ({ handleClick }) => {
  return (
    <Wrapper>
      <section className="mb-5" id="hp_sec">
        <div>
          <div className="hp-info w-50 mx-auto mb-5">
            <h2>Health Packages</h2>
            <p>
              Konnect Diagnostic Centre: Empowering proactive health management
              through tailored Diagnostic Health Packages for early detection
              and prevention, promoting healthier lives.
            </p>
          </div>
          <div className="hp-box container flex-wrap">
            <div className="hpCards d-flex justify-content-center flex-wrap gap-3">
              {packagesData.slice(0, 3).map((item, index) => (
                <HpCard key={index} item={item} handleClick={handleClick} />
              ))}
            </div>
          </div>
          <Link to="/packages">
            <div className="more text-center d-flex">
              <button>
                Explore
                <AiOutlineDoubleRight />
              </button>
            </div>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default HealthPackages;

const Wrapper = styled.section`
  .hp-box {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-top: 1.5rem;
  }

  #hp_sec {
    padding: 50px 0;
    background: ${({ theme }) => theme.colors.bg_light};
  }
  .hp-info {
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .more {
    align-items: center;
    justify-content: center;

    button {
      /* background-image: url(/images/k-10.png),
        linear-gradient(220deg, #005bab, #00ffbb90);
      border-radius: 25px; */
      background-color: white;
      margin-top: 20px;
      border: none;
      border-radius: 25px;
      padding: 8px 28px;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0;
      mask-clip: red;

      &:hover {
        transition: 0.2s;
        /* padding-right: 15px; */
        scale: 1.1;
      }
    }
  }
`;
