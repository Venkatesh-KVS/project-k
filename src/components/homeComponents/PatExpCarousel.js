import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ytPatExpVids } from "../../assets/data/AllData";
import SinglePEytVideo from "./PatExpSingleytVideo"; 
import "./PatExpVideoCarousel.css";


// import "bootstrap/dist/css/bootstrap.css";

const PatExpCarousel = () => {
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "ease-in"
  };
  const PE_carousel_slider = useRef(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="p-4 mb-5">
          <h2 className="r_heading_title text-center mb-4"> - Patient Experience - </h2>

          <div style={{margin: "20px 20px 20px 0"}} className="d-flex justify-content-end">
            <button onClick={()=>PE_carousel_slider.current.slickPrev()} className="btn btn-outline-dark btn-sm">PREV</button>
            <button onClick={()=>PE_carousel_slider.current.slickNext()} className="btn btn-outline-dark btn-sm" style={{marginLeft: "10px"}}>NEXT</button>
          </div>

          <Slider ref={PE_carousel_slider} {...sliderSettings}>
            {
              ytPatExpVids.map((videoObj) => {
                return (
                  <SinglePEytVideo vidCode={videoObj.vidCode}/>
                );
              })
            }
          </Slider>
        </div>
      </div>  
    </Wrapper>
  );
};

export default PatExpCarousel;


const Wrapper = styled.section`
.slick-arrow{
  color: black;
}
.slick-prev{
  
}
.slick-prev:before, .slick-next:before{
  color: black;
}
.slick-dots li button:before{
    color: Black;
    font-size: 10px !important;
    margin-top: 10px;
}
.slick-dots li.slick-active button:before {
    color: black !important;
}
`;