import React, { useState } from "react";
// import HpCard from "../../components/requiredPages/HpCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { packagesData } from "../../assets/data/AllData";
import { useCart } from "react-use-cart";
import { styled } from "styled-components";

const Packages = ({ handleClick }) => {
  const [activeTab, setActiveTab] = useState(packagesData[0].id);
  const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const changeText = (text) => {
    setButtonText(text);
  };

  return (
    <Wrapper>
      <section className="pkg container my-5" id="hp_sec">
        <div>
          <div className="text-center ">
            <h2>Health Packages</h2>
            <p className="w1000 mx-auto">
              Konnect Diagnostic Centre: Empowering proactive health management
              through tailored Diagnostic Health Packages for early detection
              and prevention, promoting healthier lives.
            </p>
          </div>
          <div className="pkg-tabs mt-4">
            <div className="tabs" style={{ width: "25%" }}>
              {packagesData.map((tab) => (
                <button
                  key={tab.id}
                  className={tab.id === activeTab ? "active" : ""}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="tab-content" style={{ width: "75%" }}>
              {packagesData.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane ${tab.id === activeTab ? "active" : ""}`}
                >
                  <div className="tab-bg ">{/* <h2>{tab.title}</h2> */}</div>
                  <div className="pkg-active-bg-top d-flex">
                    <div className="pkg-top d-flex">
                      <div className="pkg-image">
                        <img src={tab.ftrImg} alt={tab.title} />
                      </div>
                      <div className="pkg-info-right">
                        <div className="pkg-code">
                          <h3>{tab.title}</h3>
                          <h5 className="code">Code :{tab.code}</h5>
                          <p className="price">
                            <span>Price : </span>
                            <BsCurrencyRupee />
                            {tab.price}/-
                          </p>
                        </div>
                        <div>
                          <button
                            className="atc"
                            onClick={() => {
                              addItem(tab);
                              changeText("Added to Cart");
                              handleClick(tab);
                            }}
                          >
                            {buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pkg-tab-active-content">
                    <div className="pkg-content mt-3">{tab.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Packages;
const Wrapper = styled.section`
  .pkg-tabs {
    display: flex;
    gap: 25px;
    .tabs {
      display: flex;
      flex-direction: column;
      button {
        background-color: ${({ theme }) => theme.colors.white};
        border: none;
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary90};
        padding: 10px;
        text-align: start;
        &:hover {
          background-image: url(/konnect/images/k-10.png),
            linear-gradient(220deg, #005bab, #00ffbb90);
        }
      }
      button.active {
        background-image: url(/konnect/images/k-10.png),
          linear-gradient(220deg, #005bab, #00ffbb90);
        color: white;
        &:hover {
          background-image: url(/konnect/images/k-10.png),
            linear-gradient(220deg, #005bab, #00ffbb90);
        }
      }
    }
    .tab-content {
      .atc {
        border: none;
        background-image: url(/konnect/images/k-10.png),
          linear-gradient(220deg, #005bab, #00ffbb90);
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        font-weight: 500;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 8px 20px;
        transition: all 0.3s;
        &:hover {
          background-image: url(/konnect/images/k-10.png),
            linear-gradient(90deg, #005bab, #00ffbb90);
        }
      }
    }
  }
  .tab-bg {
    align-items: center;
    text-align: center;
    background-image: url(/konnect/images/k-10.png),
      linear-gradient(220deg, #005bab, #00ffbb90);
    border-radius: 15px;
    height: 200px;
    z-index: 0;
    margin-bottom: -155px;
  }
  .pkg-active-bg-top {
    justify-content: center;
    margin-bottom: 25px;
    .pkg-top {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 10px 0px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 15px;
      width: 88%;
      .pkg-image {
        margin-right: 3%;
        img {
          width: 350px;
          height: 100%;
          border-radius: 15px 0 0 15px;
        }
      }
      .pkg-info-right {
        width: 100%;
        background-image: url(/konnect/images/k-10.png);
        background-size: cover;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .code {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.text};
          font-weight: 600;
        }
        .price {
          border-radius: 5px;
          margin: 15px 0;
          font-size: 1.5rem;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.primary};
          span {
            color: ${({ theme }) => theme.colors.text};
          }
          svg {
            fill: ${({ theme }) => theme.colors.primary};
            margin-right: 5px;
          }
        }
      }
    }
  }
  .pkg-tab-active-content {
    display: flex;
    overflow-y: scroll;
    margin: 0px auto;
    width: 88%;
    height: 60vh;
    &::-webkit-scrollbar {
      width: 5px;
      box-shadow: inset 0 0 7px #11010125;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(220deg, #005bab, #00ffbb90);
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(360deg, #005bab80, #00ffbb80);
      }
    }
  }
`;
