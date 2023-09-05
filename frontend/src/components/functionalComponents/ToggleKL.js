import React from "react";
import LocateClinicGrid from "../../pages/nav-pages/LocateClinicGrid";

const ToggleKL = () => {
  return <LocateClinicGrid noclinics={3} />
};

export default ToggleKL;
const Wrapper = styled.section`
  .title {
    display: none;
  }
`;
