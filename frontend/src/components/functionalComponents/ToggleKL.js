import React from "react";
import LocateClinic from "../../pages/nav-pages/LocateClinic";
import { styled } from "styled-components";

const ToggleKL = ({ handleClick }) => {
  return (
    <Wrapper>
      <div className="clinics my-3">
        <LocateClinic />
      </div>
    </Wrapper>
  );
};

export default ToggleKL;
const Wrapper = styled.section`
  .title {
    display: none;
  }
`;
