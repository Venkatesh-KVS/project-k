import React from "react";
import { NavLink } from "react-router-dom";
import DynamicImage from "../components/requiredPages/DynamicImage";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper className="footer">
        <div className="footer-head">
          <div className="fh container d-flex justify-content-between">
            <div className="fh-content d-flex ">
              <p className="fh-p">Follow Konnect Diagnostics on Social Media</p>
              <NavLink
                to="https://www.facebook.com/konnectdiagnostic/"
                target="blank"
              >
                <DynamicImage imageName={"/icons/social/fb.svg"} />
              </NavLink>
              <NavLink to="https://twitter.com/KonnectDiagnos2" target="blank">
                <DynamicImage imageName={"/icons/social/twitter.svg"} />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/konnectdiagnosticcenters/"
                target="blank"
              >
                <DynamicImage imageName={"/icons/social/instagram.svg"} />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/company/konnect-diagnostics/"
                target="blank"
              >
                <DynamicImage imageName={"/icons/social/linkedin.svg"} />
              </NavLink>
              <NavLink
                to="https://www.youtube.com/channel/UC2y2Nq4LXo36lU3kkZvx9xA"
                target="blank"
              >
                <DynamicImage imageName={"/icons/social/youtube.svg"} />
              </NavLink>
            </div>
            <div className="fh-content d-flex"></div>
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
                <NavLink to="/packages" className="nav-list">
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink to="/tests" className="nav-list">
                  Tests
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-box2">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/tests" className="nav-list">
                  Book a Test
                </NavLink>
              </li>
              <li>
                <NavLink to="/locate-clinic" className="nav-list">
                  Nearest Center
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-list">
                  Download Report
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-box3">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/health-conditions" className="nav-list">
                  Health Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/radiology-services" className="nav-list">
                  Radiology Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/fetal-medicine-unit" className="nav-list">
                  Fetal Medicine Unit
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-box4">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
              <li>
                <NavLink to="/partner-with-us" className="nav-list">
                  Partner with us
                </NavLink>
              </li>

              <li>
                <NavLink to="/login" className="nav-list">
                  Conatct Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom container content-box">
          <p className="styled">
            © 2023 Konnect Diagnostics All rights reserved
          </p>
          <p className="styled">|</p>
          <NavLink to={"/"} className="styled tc">
            Terms and Conditions
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.section`
  .fh-content img {
    width: 22px;
    transition: 0.2s;
    &:hover {
      scale: 1.2;
    }
  }
  background-color: ${({ theme }) => theme.colors.primary};

  .footer-head {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  .fh-content {
    align-items: center;
    padding: 0;
    gap: 20px;
  }
  .fh {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.secondary};

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
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
    font-size: 0.9375rem;
  }
  .footer-bottom {
    padding: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    .styled {
      font-size: 14px;
      font-weight: 300;
      display: inline-block;
      margin-bottom: 10px;
      color: #fff;
    }
    .tc {
      text-decoration: none;
    }
  }
`;
