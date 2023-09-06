import React from "react";
import LocateClinicGrid from "../../pages/nav-pages/LocateClinicGrid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const ToggleKL = () => {
  return (
    <Wrapper>
      <LocateClinicGrid noclinics={3} />
      <Link to="/packages">
        <div className="more text-center d-flex">
          <button class="decoration-none">
            Explore
            <AiOutlineDoubleRight />
          </button>
        </div>
      </Link>
    </Wrapper>
  );
};

export default ToggleKL;
const Wrapper = styled.section`
  .title {
    display: none;
  }
  .more {
    align-items: center;
    justify-content: center;

    button {
      background-image: url(/images/k-10.png),
        linear-gradient(180deg, #005bab, #00ffbb90);
      border-radius: 25px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      border: none;
      border-radius: 25px;
      padding: 8px 28px;
      font-size: 1rem;
      font-weight: 600;
      transition: 0.2s;
      svg {
        fill: ${({ theme }) => theme.colors.white};
      }
      &:hover {
        scale: 1.1;
      }
    }
  }
`;
