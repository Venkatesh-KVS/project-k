import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
// import DynamicImage from "../requiredPages/DynamicImage";

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
      <div className="home-slider z-1">
        <Slider
          ref={Fac_carousel_slider}
          {...sliderSettings}
          className="s-slider"
        >
          <div className="sliderSec1 d-flex justify-content-center align-items-center">
            <div className="container">
              <h1 className="display-4 fw-bold w-50">
                <span className="title">
                  Navigating <span className="span"> Health Solutions </span>{" "}
                  with
                  <br /> Konnect
                </span>
              </h1>
            </div>
          </div>

          <div className="sliderSec2 d-flex bg-2">
            <div className="slider-2 container d-flex">
              <div className="slider-2-content ">
                <h1 className="display-4 fw-bold ">
                  Your <span className="span">partner</span> in <br /> keeping
                  you <span className="span">healthy</span>
                </h1>
                <div className="gyr my-4">
                  Get Your <strong className="mx-2">Reports</strong> in
                  <span className="mx-2">12</span>hours{" "}
                  <span style={{ color: "red" }}> * </span>
                </div>
              </div>
              <div className="slider-2-video d-flex">
                <video autoPlay loop muted controls={false}>
                  <source src="/images/hero24.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;

const Wrapper = styled.section`
  .home-slider {
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    display: flex;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 5px 20px;
  }
  .s-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .sliderSec1 {
      width: 100%;
      height: 65vh;
      background: ${({ theme }) => theme.colors.white}
        url("images/bannerImage.jpg") no-repeat right top;
      background-size: cover;
      .title {
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
    .sliderSec2 {
      width: 100%;
      height: 65vh;
      background-size: center;
      background-repeat: no-repeat;
      .slider-2 {
        justify-content: space-between;
        width: 100%;
        gap: 50px;
        .slider-2-content {
          align-self: center;
          .span {
            color: ${({ theme }) => theme.colors.secondary};
            /* margin: 0 1rem 0 1rem; */
          }
          h1 {
            font-size: 4rem;
            text-transform: capitalize;
            line-height: 1.3;
            color: ${({ theme }) => theme.colors.primary};
          }
          .hero-packages {
            flex-wrap: wrap;
          }
        }
        .gyr {
          /* width: 24ch; */
          /* overflow: hidden; */
          white-space: nowrap;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 1.3rem;
          line-height: 1.3;
          strong,
          span {
            color: #005bab;
            font-weight: 700;
          }
          @keyframes typing {
            from {
              width: 0;
            }
          }
          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        }

        video {
          width: 28rem;
        }
      }
    }
  }

  .bg-2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-arrow {
    z-index: 50;
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
    left: 2%;
  }
  .slick-next {
    top: 50%;
    right: 2%;
    /* color: black; */
  }
  .slider1 {
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
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  /* Mobile View */

  @media only screen and (max-width: 600px) {
    .sliderSec1 {
      background: ${({ theme }) => theme.colors.white}
        url("images/bannerImage.jpg") no-repeat center center;
      background-size: cover;
      .title {
        font-size: 2rem;
      }
    }
  }
`;
