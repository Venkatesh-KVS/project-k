import React from "react";
import MyCarousel from "../requiredPages/Carousel";
import styled from "styled-components";

const SectionFour = () => {
  return (
    <Wrapper>
      <div className="secFour container ">
        <div className="secFour-info d-flex">
          <h2>Popular Tests</h2>
          <p className="w1000">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="cards d-flex">
          <MyCarousel />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;
const Wrapper = styled.section`
  .secFour-info {
    margin-bottom: 25px;
    p {
      width: 1000px;
    }
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
