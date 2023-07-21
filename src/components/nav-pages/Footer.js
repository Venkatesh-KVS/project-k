import React from "react";
import { NavLink } from "react-router-dom";
import DynamicImage from "../requiredPages/DynamicImage";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper className="footer">
        <div className="footer-head">
          <div className="fh container d-flex justify-content-between">
            <div className="fh-content d-flex ">
              <p className="fh-p">Follow Konnect Diagnostics on Social Media</p>
              <NavLink>
                <DynamicImage imageName={"/icons/fb.svg"} />
              </NavLink>
              <NavLink>
                <DynamicImage imageName={"/icons/twitter.svg"} />
              </NavLink>
              <NavLink>
                <DynamicImage imageName={"/icons/instagram.svg"} />
              </NavLink>
              <NavLink>
                <DynamicImage imageName={"/icons/linkedin.svg"} />
              </NavLink>
            </div>
            <div className="fh-content d-flex">
              {/* <NavLink className="fh-nl d-flex">
                <DynamicImage imageName={"/icons/Email.svg"} />
                <p className="fh-nl-p">Subscribe to our email newsletter</p>
                <DynamicImage
                  className="fh-nl-arrow"
                  imageName={"/icons/right-arrow.svg"}
                />
              </NavLink> */}
            </div>
          </div>
        </div>
        <div className="footer-container container d-flex">
          <div className="footer-box1">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/" className="nav-list">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-list">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-list">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-list">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-list">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-box2">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/" className="nav-list">
                  Book a Test
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-list">
                  Nearest Center
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-list">
                  Download Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-list">
                  Promotions and Discounts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-list">
                  Social Programmes
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-box3">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/" className="nav-list">
                  Nearest Center
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-list">
                  Promotions and Discounts
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-list">
                  Download Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-list">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-box4">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/" className="nav-list">
                  Download Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-list">
                  Promotions and Discounts
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-list">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-list">
                  Promotions and Discounts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-list">
                  Conatct Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom container content-box">
          <p className="para ">Promotions and ions an</p>
          <p className="para ">Prions</p>
          <p className="para ">Promotions and ions an</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.section`
  background-color: #00aeef;

  .footer-head {
    background-color: #005bab;
  }
  .fh-content {
    align-items: center;
    padding: 0;
    gap: 20px;
  }
  .fh {
    padding: 0;
    background-color: #005bab;
    .fh-nl {
      gap: 15px;
      align-items: center;
      justify-content: space-evenly;
      .fh-nl-p {
        margin: 0;
        color: #fff;
      }
    }
    .fh-content p {
      padding: 15px 0;
      font-weight: 500;
      color: #fff;
      margin: 0;
      .fh-content img {
        width: 25px;
      }
    }
  }
  .footer-container {
    padding: 50px 0 25px 0;
    justify-content: space-between;
  }

  .footer-navbar-lists {
    font-size: 1rem;
    gap: 15px;
  }
  .nav-list {
    text-transform: capitalize;
  }
  .footer-bottom {
    padding: 0;
    p {
      display: inline-block;
      margin-right: 0.8rem;
      color: #fff;
      font-size: 1rem;
      /* padding: 1rem 0 1rem 0; */
    }
  }
`;
