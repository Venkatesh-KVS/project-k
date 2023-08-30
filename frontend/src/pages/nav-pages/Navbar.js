import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartSize }) => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg   ">
        <div className=" p-0 container d-flex justify-content-between">
          <ul className="navbar-lists navbar-nav d-flex">
            <li>
              <NavLink to="/tests" className="nav-list">
                Tests
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/home-collection" className="nav-list">
                Home Collection
              </NavLink>
            </li> */}
            <li>
              <li class="services ">
                <NavLink to="/services" className="nav-list">
                  Services
                </NavLink>
                <ul class="subMenu">
                  <li class="subMenuItem ">
                    <NavLink to="/health-conditions" className="sub-nav-list ">
                      Health Conditions
                    </NavLink>
                  </li>
                  <li class="subMenuItem ">
                    <NavLink to="/radiology-services" className="sub-nav-list">
                      Radiology Services
                    </NavLink>
                  </li>
                  <li class="subMenuItem ">
                    <NavLink to="/fetal-medicine-unit" className="sub-nav-list">
                      Fetal Medicine Unit
                    </NavLink>
                  </li>
                </ul>
              </li>
            </li>
            <li>
              <NavLink to="/packages" className="nav-list">
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/locate-clinic" className="nav-list">
                Locate Clinic
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-list">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/partner-with-us" className="nav-list">
                Partner With US
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.section`
.navbar {
  ${'' /* background-color: #fff; */}
}
.container {
  padding: 10px 20px;
}
.navbar-lists {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.nav-list {
  color: black;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

/* Hover effect for navigation items */
.nav-list:hover {
  color: ${({ theme }) => theme.colors.primary};
}

/* Style for submenu items */
.subMenu {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  display: none; /* Hide submenu by default */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subMenuItem {
  position: relative;
}

.sub-nav-list {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

/* Hover effect for submenu items */
.sub-nav-list:hover {
  background-color: #f2f2f2; /* Change background color on hover */
}

/* Show submenu on parent item hover */
.services:hover .subMenu {
  display: block;
}

`;
