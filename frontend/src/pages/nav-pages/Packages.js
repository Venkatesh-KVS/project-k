import React, { useState } from "react";
// import HpCard from "../../components/requiredPages/HpCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { packagesData } from "../../assets/data/AllData";
import { styled } from "styled-components";

const Packages = ({ handleClick }) => {
  const [activeTab, setActiveTab] = useState(packagesData[0].id);

  return (
    <Wrapper>
      <section className=" container my-5" id="hp_sec">
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
                  <div className="pkg-tab-active">
                    <div className="pkg-top d-flex">
                      <div className="pkg-image">
                        <img
                          src={tab.ftrImg}
                          alt={tab.title}
                          style={{ width: "450px" }}
                        />
                      </div>
                      <div className="img-right">
                        <div className="pkg-title">
                          <h3>{tab.title}</h3>
                          <p className="code">Code :{tab.code}</p>
                          <p className="price">
                            <BsCurrencyRupee />
                            {tab.price}/-
                          </p>
                          <p>{tab.excerpt.slice(0, 120)}...</p>
                        </div>
                        <div>
                          <button className="atc">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="pkg-content mt-3">{tab.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="hp-box container mt-4 flex-wrap">
            <div className="hpCards d-flex justify-content-center flex-wrap gap-3">
              {packagesData.map((item, index) => (
                <HpCard key={item.code} item={item} handleClick={handleClick} />
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </Wrapper>
  );
};

export default Packages;
const Wrapper = styled.section`
  .img-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-bottom: 3rem; */
  }
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
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px 15px;
        text-align: start;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary90};
        }
      }
      button.active {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        &:hover {
          background: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .tab-content {
      .pkg-image {
        margin-right: 2%;
        img {
          border-radius: 5px;
        }
      }
      .pkg-title {
        .code {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.primary90};
          font-weight: 500;
        }
        .price {
          width: 100px;
          background-color: ${({ theme }) => theme.colors.primary};
          /* border: 1px solid ${({ theme }) => theme.colors.primary90}; */
          border-radius: 5px;
          margin: 15px 0;
          /* padding: 10px 15px; */
          text-align: center;
          align-items: center;
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.white};
          svg {
            fill: ${({ theme }) => theme.colors.white};
            margin-right: 5px;
          }
        }
      }
      .atc {
        border: none;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
        /* border: none; */
        font-size: 1rem;
        font-weight: 500;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 8px 20px;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
