import React, { useState } from "react";
import styled from "styled-components";
// import { useCart } from "react-use-cart";
// import { testsData } from "../data/AllData";

export const TestCard = ({item, handleClick}) => {
  // const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const changeText = (text) => {
    setButtonText(text);
  };

  // for (let i = 0; i < testsData.length; i--)
  return (
    <Wrapper>
      <div className="tstCards d-flex gap-2">
        <img src="/images/k.png" className="cardcomplogo" alt="" />
        <div className="tstsCard w-100">
          <div className="go-corner">
            {/* <div className="go-arrow">→</div> */}
          </div>
          <div className="tcardbody">
            <div className="card_org_cont">
              <img src={"/images/organs/" + item.category + ".png"} className="testOrgImg" alt="" />
            </div>
            <h5 className="tstTitle">{item.name}</h5>
            <p className="tstInv"> <b> INVCODE: </b> {item.id} </p>
            <div className="w-100 mb-4 more-det">
              <p className="tstInv"> <b> Sample Type: </b> {item.sample_type} </p>
              {/* <p className="tstInv"> Pre test preparation: <b> {item.pre_test_preparation} </b> </p> */}
              <p className="tstInv"> <b> Test Report Delivery: </b> {item.test_report_delivery} </p>
              <p className="tstInv"> <b> Frequency: </b> {item.frequency} </p>
              {/* <p className="tstInv"> Home sample collection: <b> {item.home_sample_collection } </b> </p> */}
            </div>
          </div>

          <div className="d-flex w-100 justify-content-between align-items-center border-top p-2 px-4 tcardfooter">
            <h6 className="mb-0 tstPrice"> <small>Rs :</small> {item.price}/-</h6>
            <button
              className="tstCardBtn btn-sm"
              onClick={() => {
                // addItem(item);
                changeText("Added to Cart");
                handleClick(item);
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tstCards {
    flex-wrap: wrap;
    text-align: left;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.05);
    color: #fff;
    border-radius: 4px;
    width: 300px;
    transition: 0.5s;
    overflow: hidden;
    position: relative;
    z-index: 0;
    .card_org_cont{
      margin-bottom: 15px;
      .testOrgImg{
        width: 30px;
      }
    }
    &:hover{
      border: 1px solid rgba(0,0,0,0.2);
      box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.05) 0px 50px 100px -20px, rgba(0, 0, 0, 0.06) 0px 30px 60px -30px;
    }
    .cardcomplogo{
      position: absolute;
      width: 25px;
      height: 25px;
      top: 10px;
      right: 10px;
      z-index: 20;
    }
  }
  .tcardbody{
    z-index: 2;
    padding: 1rem;
    overflow: hidden;
    position: relative;
  }
  ${'' /* .tcardbody:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    background: none;
    border: 3px
    height: 52px;
    width: 52px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }
  .tstCards:hover .tcardbody:before {
    transform: scale(2.5);
  } */}
  .tcardfooter{
      z-index: 3;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0,0,0,0.05)
  }
  .tstCards:hover {
    cursor: pointer;
    &:hover .tstCardBtn {
      color: ${({ theme }) => theme.colors.txt};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .tstsCard {
    height: 300px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    .tstCardBtn {
      background-image: linear-gradient(180deg, #005bab, #00aeef90);
      padding: 5px 15px;
      font-weight: 600;
      border-radius: 5px;
      font-size: 14px;
      background: white;
      position: relative;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: 0.5s;
        border-radius: 5px;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        z-index: 1;
        &:before {
          width: 100%;
        }
      }
    }
    .tstTitle {
      font-size: 1.1rem;
      font-weight: 900;
      line-height: 1.6rem;
      margin-bottom: 18px;
    }
    .tstInv {
      color: #b3b3b3;
      font-weight: 400;
      font-size: 0.8rem;
    }
    .tstPrice {
      color: #00203c;
      font-weight: 900;
      font-size: 1.2rem;
    }
  }

  .tstCardBtn {
    color: #005bab;
    font-size: 0.8rem;
    border: 1px solid rgba(0,0,0,0.1);
    justify-content: flex-end;
  }
  .txtcartBtn:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
  .para {
    color: #fff;
  }
`;
