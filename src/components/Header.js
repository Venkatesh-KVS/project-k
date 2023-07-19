import { styled } from "styled-components";
// import React, { useState } from "react";
import DynamicImage from "./requiredPages/DynamicImage";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
// import { testsData } from "./data/AllData";
// import { TestCard } from "./requiredPages/TestCard";

const Header = () => {
  // const [search, setSearch] = useState("null");

  return (
    <Wrapper>
      <div className="header">
        <div className="header-fixed">
          <div className="top-nav container d-flex justify-content-between">
            <div className="logo">
              <NavLink to={"/"}>
                <DynamicImage imageName={"konnect-logo.png"} width={300} />
              </NavLink>
            </div>

            {/* <div className="searchBox d-flex gap-2">
              <select className="select-box">
                <option className="cities" value="meat">
                  Select Your City
                </option>
                <option className="cities" value="meat">
                  Hyderabad
                </option>
                <option className="cities" value="meat">
                  Bangalore
                </option>
                <option className="cities" value="meat">
                  Sangareddy
                </option>
                <option className="cities" value="meat">
                  Warangal
                </option>
                <option className="cities" value="meat">
                  Nizamabad
                </option>
                <option className="cities" value="meat">
                  Nellore
                </option>
                <option className="cities" value="meat">
                  Kurnool
                </option>
                <option className="cities" value="meat">
                  Karimnagar
                </option>
                <option className="cities" value="meat">
                  Nandyal
                </option>
                <option className="cities" value="meat">
                  Gulbarga
                </option>
              </select>
              <input
                className="input"
                // onClick={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search Tests/Package"
              />
            </div> */}
            <div className="register d-flex">
              <div>
                <button
                  className="butn signup-button d-flex gap-2"
                  onClick={"/"}
                >
                  Login / SignUp
                  <DynamicImage imageName={"/icons/signup.svg"} />
                </button>
              </div>
            </div>
          </div>
          {/* <div className="syc d-flex gap-3 p-3">
            {testsData
              .filter((item) => {
                return search.toLowerCase() === " "
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <TestCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  inv={item.inv}
                  item={item}
                />
              ))}
          </div> */}
          <Navbar />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  .syc {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .header {
    position: relative;
    /* height: 100px; */
    .header-fixed {
      position: fixed;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 9999;
    }
  }

  .searchBox {
    background-color: #00aeef;
    border-radius: 5px;
    padding: 0;
  }
  .select-box {
    color: #fff;
    background-color: #00aeef;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    outline-style: none;
    option {
      color: #fff;
    }
    &:focus {
      outline-style: none;
    }
  }
  .input {
    border: none;
    text-decoration: none;
    margin: 5px;
    padding: 5px 15px;
    border-radius: 5px;
    &:focus {
      outline-style: none;
    }
  }
`;
