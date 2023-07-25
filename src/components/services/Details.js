import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineTags } from "react-icons/ai";
import { condition } from "../data/HcData";
import { useParams } from "react-router-dom";
// import HcCard from "./HcCard";

const DetailsPages = () => {
  const { id } = useParams();
  const [conditions, setconditions] = useState(null);

  useEffect(() => {
    let conditions = condition.find(
      (conditions) => conditions.id === parseInt(id)
    );
    if (conditions) {
      setconditions(conditions);
    }
  }, [id]);

  return (
    <Wrapper>
      {conditions ? (
        <section className="singlePage">
          <div className="container d-flex gap-5">
            <div className="left ">
              <div className="img">
                <img src={conditions.cover} alt={conditions.title} />
              </div>
              <AiOutlineTags className="icon" />
              <a href="/details">{conditions.category}</a>
              <h2>{conditions.title}</h2>
              <hr />
              <div className="content">
                <h3 className="question">
                  {conditions.questions[0].question1[0].qTitle}
                </h3>
                <p className="desc">
                  {conditions.questions[0].question1[0].qDescription}
                </p>
                <p>{conditions.questions[0].question2[0].qDescription}</p>
              </div>
            </div>
            <div className="right">
              {condition.slice(0, 5).map((item) => (
                <div className="related">
                  <div className="item d-flex gap-2">
                    <div className="img">
                      <img src={item.cover} alt="" />
                    </div>
                    <div className="info">
                      <h3>{item.title}</h3>
                      <p>{item.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </Wrapper>
  );
};

export default DetailsPages;

const Wrapper = styled.section`
  .singlePage {
    margin: 2rem auto;
    .left {
      width: 65%;
      img {
        width: 100%;
        height: 400px;
        border-radius: 15px;
        margin-bottom: 20px;
      }
      a {
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
      }
      h2 {
        font-family: "Montserrat Alternates", sans-serif;
        margin-bottom: 15px;
        line-height: 1.5;
        font-size: 2rem;
      }
      .content {
        /* background-color: aliceblue; */
        margin: 1.5rem auto;
        .question {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .desc {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
    .right {
      width: 35%;
      .box {
        /* border: 2px solid red; */
        /* width: 100%; */
      }
      img {
        width: 100%;
        height: 100px;
      }
      .related {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 15px;
        .item {
          align-items: center;
          display: flex;
          margin-bottom: 20px;
          padding: 10px;

          .img {
            width: 40%;
            img {
              width: 100%;
              border-radius: 5px;
            }
          }
          .info {
            /* background: red; */
            width: 60%;

            h3 {
              color: ${({ theme }) => theme.colors.primary};
              font-size: 20px;
              font-weight: 600;
            }
            p {
              color: ${({ theme }) => theme.colors.text};

              font-size: 0.925rem;
            }
          }
        }
      }
    }
  }
`;
