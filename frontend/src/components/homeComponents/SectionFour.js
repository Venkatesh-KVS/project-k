import React from "react";
// import MyCarousel from "../requiredPages/Carousel";
import styled from "styled-components";
import { PopularTests } from "../requiredPages/PopularTests";

const SectionFour = ({handleClick}) => {
  return (
    <Wrapper>
      <div className="secFour container ">
        <div className="secFour-info w-50 mx-auto mb-5">
          <h2>Popular Tests</h2>
          <p>
            Explore Konnect's popular diagnostic tests to gain valuable insights
            into your health, cognition, and overall well-being. Take charge of
            your health journey now.
          </p>
        </div>
        <div className="cards">
          {/* <MyCarousel /> */}
          <PopularTests handleClick={handleClick} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;
const Wrapper = styled.section`
  .secFour-info {
    margin-bottom: 25px;
  }
  .secFour {
    margin: 5rem auto;
  }
  .secFour-info {
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
