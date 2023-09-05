import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { testsData } from "../../assets/data/AllData";

export const PopularTests = ({ handleClick }) => {
  const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Book Now");
  const changeText = (text) => {
    setButtonText(text);
  };
  return (
    <Wrapper>
      <div className="ptCards my-3 container p-0 d-flex flex-wrap gap-2">
        {testsData.slice(0, 4).map((item) => (
          <div className="ptCard">
            <div className="ptBg d-flex flex-column justify-content-center">
              <div className="pt-info">
                <h3 className="pt-title">{item.title}</h3>
                <h5 className="pt-inv">
                  INVCODE:<b> {item.inv} </b>
                </h5>
                <p>{item.description}</p>
              </div>
              <div className="ptBtn">
                <button
                  onClick={() => {
                    addItem(item);
                    changeText("Book Now");
                    handleClick(item);
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .ptCards {
    justify-content: space-between;
    .ptCard {
      background-color: #00ffbb;
      position: relative;
      border-radius: 15px;
      width: 24%;
      /* padding: 25px; */
      z-index: 1;
      .ptBg {
        background-image: url(/images/k-10.png),
          linear-gradient(360deg, transparent, #005bab);
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #005bab90;
        padding: 25px;
        border-radius: 15px 15px 100px 15px;
        height: 100%;
      }
      .pt-info {
        color: ${({ theme }) => theme.colors.white};
        h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        h5 {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }
      .ptBtn {
        margin-top: 2rem;
        text-align: start;
        button {
          background-color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          padding: 5px 15px;
          border-radius: 5px;
        }
      }
    }
  }
`;
