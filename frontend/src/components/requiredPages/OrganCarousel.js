import React from "react";
import { styled } from "styled-components";

const OrganCarousel = ({ images }) => {
  return (
    <Wrapper>
      <div className="organs d-flex gap-3 flex-wrap ">
        {images.map((image, index) => (
          <div className="org-item" key={index}>
            <img src={image.src} alt={image.alt} />
            <p>{image.alt}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default OrganCarousel;

const Wrapper = styled.section`
  .organs {
    display: flex;
    .org-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &:hover {
        background-color: #005bab10;
      }
      &:hover p {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    img {
      width: 50px;
      margin: 10px;
    }
  }
`;
