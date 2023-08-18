import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";
import HeroSection from "./HeroSection";

const HeroSlider = () => {
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <Slider
        ref={Fac_carousel_slider}
        {...sliderSettings}
        className="s-slider"
      >
        <div className="hero-bg-img bg-1">
          <DynamicImage imageName={"bannerImage.jpg"} />
          <div className="bg-1-content">
            <h1 className="display-4 fw-bold ">
              Navigating
              <span className="span"> Health Solutions </span>
              with
              <br />
              Konnect
            </h1>
          </div>
        </div>

        <div className="hero-bg-img d-flex bg-2">
          <HeroSection />
        </div>
      </Slider>
    </Wrapper>
  );
};

export default HeroSlider;

const Wrapper = styled.section`
  .bg-1 {
    position: relative;
    .bg-1-content {
      position: absolute;
      top: 30%;
      left: 10%;
      /* transform: translate(50px, 50px); */
      width: 55%;
    }
    h1 {
      font-size: 4rem;
      text-transform: capitalize;
      line-height: 1.3;
      color: ${({ theme }) => theme.colors.primary};
    }
    .span {
      color: ${({ theme }) => theme.colors.secondary};
      /* font-size: 2.5rem; */
    }
  }
  .bg-2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .s-slider {
    z-index: 0;
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* margin-bottom: -10%; */
  }
  .slick-arrow {
    &::before {
      font-family: inherit;
      font-size: 32px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary90};
    }
    &:hover::before {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .slick-prev {
    top: 50%;
    left: 3%;
    z-index: 100;
  }
  .slick-next {
    top: 50%;
    right: 3%;
    color: black;
    &::before {
    }
  }
  .hero-bg-img {
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .slick-dots {
    bottom: 5%;
    .slick-active {
      background-color: ${({ theme }) => theme.colors.primary90};
    }
    li {
      background-color: #cfcfcf;
      border-radius: 50px;
      &::before {
        background-color: red;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
