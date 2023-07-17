import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg   ">
        <div className=" container d-flex justify-content-between">
          <ul className="navbar-lists navbar-nav d-flex">
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
              <NavLink to="/tests" className="nav-list">
                Tests
              </NavLink>
            </li>
            <li>
              <NavLink to="/home-collection" className="nav-list">
                Home Collection
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/services" className="nav-list">
                Services
              </NavLink> */}
              <li class="menuItem">
                <NavLink to="/services" className="nav-list ">
                  Services
                </NavLink>
                <ul class="subMenu">
                  <li class="subMenuItem menuItem">
                    <NavLink to="/services" className="nav-list sub-nav-list ">
                      Health Conditions
                    </NavLink>
                  </li>
                  <li class="subMenuItem menuItem">
                    <NavLink
                      to="/radiology-services"
                      className="nav-list sub-nav-list"
                    >
                      Radiology Services
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
              <NavLink to="/partner-with-us" className="nav-list">
                Partner With US
              </NavLink>
            </li>
          </ul>
          <div className="cart-icon">
            <NavLink to="/cart" className="cart-icon-box">
              <FaShoppingCart className="cart-icon" />
              {/* <span>0</span> */}
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.section`
  .cart-icon {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    svg {
      font-size: 25px;
      fill: ${({ theme }) => theme.colors.white};
    }
    span {
      position: absolute;
      color: ${({ theme }) => theme.colors.white};

      top: -15px;
      height: 15px;
      width: 15px;
      /* background-color: red; */
      align-items: center;
      text-align: center;
      justify-content: center;
      margin: 0;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .nav-list {
    font-size: 18px;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    line-height: 1.8;
    transition: 0.3s;
    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
  .menuItem {
    list-style: none;
    position: relative;
    /* z-index: 2; */

    &:hover .subMenu {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
  }

  .subMenu {
    width: 250px;
    display: none;
    background-color: #00aeef;
    position: absolute;
    top: 1.8rem;
  }
  .sub-nav-list {
    padding: 15px;
    font-size: 16px;

    /* margin-bottom: 2px solid red; */
    &:hover {
      padding-bottom: 0;
      transition: 0.3s;
      border-bottom: 1px solid #fff;
      overflow: hidden;
    }
  }

  .navbar {
    background-color: #00aeef;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
