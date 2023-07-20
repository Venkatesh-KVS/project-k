import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { BsCurrencyRupee } from "react-icons/bs";
// import { packagesData } from "../data/AllData";

const HpCard = (props) => {
  const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const changeText = (text) => {
    setButtonText(text);
  };

  return (
    <Wrapper>
      <section className="d-flex mb-3 ">
        <div className="hp-card border p-2">
          <div className="hp-img rounded">
            <img src={props.image} alt="k" />
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
                className="btn atc-btn btn-sm"
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
    .hp-img {
      overflow: hidden;
      img {
        transition: all 0.3s;
        width: 20rem;
        &:hover {
          scale: 1.1;
        }
      }
    }

    .atc-btn {
      color: ${({ theme }) => theme.colors.white};
      width: 8rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
