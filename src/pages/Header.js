import { styled } from "styled-components";
import Navbar from "./nav-pages/Navbar";
import { NavLink } from "react-router-dom";
import { User } from "./nav-pages/User";
import { BiSolidLogInCircle } from "react-icons/bi";

const Header = ({cartSize}) => {
  return (
    <Wrapper>
      <div className="header">
        <div className="header-fixed">
          <div className="top-nav container mx-auto my-2 d-flex justify-content-between">
            <div className="logo">
              <NavLink to={"/"}>
                <img
                  src="/project-konnect/images/konnect-logo.png"
                  alt="Konect-Logo"
                />
              </NavLink>
            </div>

            <div className="register d-flex">
              <div>
                <NavLink to={"/login"}>
                  <button
                    className="butn signup-button d-flex gap-2"
                    // onClick={"/login"}
                  >
                    Login / SignUp
                    <BiSolidLogInCircle />
                    {/* <DynamicImage imageName={"/icons/signup.svg"} /> */}
                  </button>
                </NavLink>
              </div>
              <div className="user">
                <User />
              </div>
            </div>
          </div>

          <Navbar cartSize={cartSize} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  .top-nav {
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
  .syc {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .header {
    position: relative;
    height: 117px;
    .header-fixed {
      position: fixed;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 99;
    }
    .logo {
      img {
        width: 200px;
      }
    }
    .butn {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      padding: 6px 25px 6px 25px;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      border-radius: 25px;
      svg {
        fill: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
      }
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
