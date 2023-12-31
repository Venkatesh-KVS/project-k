import React, { useState } from "react";
import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GrHelp } from "react-icons/gr";
import { Link } from "react-router-dom";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };
  return (
    <Wrapper>
      <div className="profile">
        {user ? (
          <>
            <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
              <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/account">
                  <div className="image">
                    <div className="img">
                      <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className="text">
                      <h4 className="text-left">Eden Smith</h4>
                      <label className="text-left">Los Angeles, CA</label>
                    </div>
                  </div>
                </Link>
                {/* <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Create Post</h4>
                  </button>
                </Link> */}
                <Link to="/login">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="box">
                    <BsBagCheck className="icon" />
                    <h4>My Order</h4>
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 48 48" width="28"><g id="report_19" data-name="report 19"><path d="m22 33h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/><path d="m37 33h-11a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2z"/><path d="m22 37h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/><path d="m37 37h-11a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2z"/><path d="m40 5h-29a6 6 0 0 0 -6 6v8a3 3 0 0 0 3 3h7v18a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-32a3 3 0 0 0 -3-3zm-25 15h-7a1 1 0 0 1 -1-1v-8a4 4 0 0 1 8 0zm26 20a1 1 0 0 1 -1 1h-22a1 1 0 0 1 -1-1v-29a6 6 0 0 0 -1.54-4h24.54a1 1 0 0 1 1 1z"/><path d="m37 31a1 1 0 0 0 0-2h-11a1 1 0 0 0 0 2z"/><path d="m22 31a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2z"/><path d="m37 20.6a1 1 0 0 0 -1 1 2.41 2.41 0 0 1 -2.4 2.4h-9.17a2.42 2.42 0 0 1 -2.43-2.4 1 1 0 0 0 -2 0 4.43 4.43 0 0 0 4.43 4.4h9.17a4.42 4.42 0 0 0 4.4-4.4 1 1 0 0 0 -1-1z"/><path d="m28.21 21.47a1 1 0 0 0 1.61 0l2.89-3.89a1 1 0 0 0 -1.61-1.2l-1.1 1.47v-7.85a1 1 0 1 0 -2 0v7.89l-1.09-1.47a1 1 0 0 0 -1.6 1.2z"/></g></svg>
                    <h4 style={{marginLeft: '14px'}}>Download Report</h4>
                  </button>
                </Link>
                {/* <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Wishlist</h4>
                </button> */}
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box">
                  <BiLogOut className="icon" />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .profile {
    cursor: pointer;
    .image {
      display: flex;
      padding-bottom: 20px;
      img {
        margin-right: 20px;
        border: none;
      }
    }
    button {
      font-size: 1rem;
      padding: 0;
      border: none;
      background: none;
      font-weight: 500;
    }
  }
  .profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    &:focus {
      border: none;
    }
  }
  .openProfile {
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    position: absolute;
    padding: 20px;
    border-radius: 5px;
    top: 65px;
    right: 10px;
    width: 250px;
    background: #fff;
    z-index: 100;
    /* background-color: ${({ theme }) => theme.colors.primary90}; */
  }
  .openProfile .box {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 4px;
    padding: 5px;
    transition: 0.5s;
  }
  .openProfile .icon {
    font-size: 20px;
    margin-right: 20px;
  }
  .openProfile h4 {
    font-size: 15px;
    font-weight: 500;
  }
  .openProfile button:hover {
    background: rgba(0, 91, 171, 0.075);
  }
`;
