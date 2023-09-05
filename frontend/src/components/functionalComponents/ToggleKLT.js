import React from "react";
import { PopularTests } from "../requiredPages/PopularTests";

const ToggleKLT = ({ handleClick }) => {
  return(
    <>
      <PopularTests handleClick={handleClick} />
    </>
  );
};

export default ToggleKLT;
