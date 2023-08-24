import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
// import DynamicImage from "../requiredPages/DynamicImage";
import HeroSection from "./HeroSection";

const HeroSlider = () => {
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <Slider ref={Fac_carousel_slider} {...sliderSettings} className="s-slider">
        <div className="sliderSec1 d-flex justify-content-center align-items-center">
          <div className="container">
            <h1 className="display-4 fw-bold w-50">
                Navigating <span className="span"> Health Solutions </span> with <br /> Konnect
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
  .s-slider {
    z-index: 0;
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* margin-bottom: -10%; */
    .sliderSec1{
      width: 100%;
      height: 80vh;
      background: #ffffff url("images/bannerImage.jpg") no-repeat right top;
      background-size: cover;
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
  }
  ${'' /* h1 {
    font-size: 4rem;
    text-transform: capitalize;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.primary};
  }
  .span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
  } */}
  .bg-2 {
    display: flex;
    align-items: center;
    justify-content: center;
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
    ${'' /* border: 1px solid red; */}
    top: 50%;
    left: 5%;
    z-index: 10;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &:hover{
      background-color: ${({ theme }) => theme.colors.primary90};
      &:before{
        color: white; 
      }
    }
    &:before{
      ${'' /* border: 1px solid red; */}
    }
  }
  .slick-next {
    top: 50%;
    right: 5%;
    color: black;
    &::before {
      ${'' /* border: 1px solid red; */}
    }
  }
  .slider1{
    border: 2px solid red;
    height: 100%;
    background: url("/images/bannerImage.jpg");
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
