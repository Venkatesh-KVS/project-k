import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { BsCurrencyRupee } from "react-icons/bs";

const HpCard = (props) => {
  const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const changeText = (text) => {
    setButtonText(text);
  };

  return (
    <Wrapper>
      <section className="d-flex mb-3 ">
        <div className="hp-card">
          <div className="hp-img p-2 border rounded  ">
            <img src={props.image} className=" rounded" alt="k" />
          </div>
          <div className="p-2">
            <h2 className=" r_heading_title_secondary">{props.title}</h2>
            <span>Code: {props.code}</span>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="hp_price">
                <BsCurrencyRupee />
                {props.price}
              </h2>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  addItem(props.item);
                  changeText("View Cart");
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HpCard;

const Wrapper = styled.section`
  .hp-card {
    width: 100%;
    justify-content: space-between;
    h2 {
      font-size: 16px;
      font-weight: 700;
    }
    h2.hp_price {
      margin: 0;
    }

    img {
      width: 20rem;
    }

    &:hover img {
      /* scale: 1.2; */
    }
  }
  /* .hpCard-container {
    width: 50%;
    .hpTitle-box {
      height: 80px;
      background-color: ${({ theme }) => theme.colors.secondary};
      .hpTitle {
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.white};
      }
      .hpCode {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        font-size: 15px;
        font-weight: 600;
        align-items: center;
        text-align: center;
      }
    }
    .hpPrice {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.25rem;
      font-weight: 700;
    }
    .hpInfo-box {
      padding: 20px;
      height: 180px;
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      background-image: url("project-konnect/images/k-10.png");
      background-repeat: no-repeat;
      background-size: 150px;
      background-position: center left;
    }
    .hpBtn {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  } */
`;
