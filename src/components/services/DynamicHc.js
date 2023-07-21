import React from "react";
import HcCard from "./HcCard";
import { styled } from "styled-components";
import { packagesData } from "../data/AllData";

// const dynamicCardsData = [
//   { id: "1", title: "Item 1", description: "Description of Item 1" },
//   { id: "2", title: "Item 2", description: "Description of Item 2" },
// ];

const DynamicHc = ({ dynamicCardsData }) => {
  return (
    <Wrapper>
      <div className="container">
        <h1>DynamicHcData</h1>
        <div className="cards-container">
          {packagesData.map((item) => (
            <HcCard
              key={item.id}
              id={item.id}
              title={item.title}
              // description={item.description}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DynamicHc;

const Wrapper = styled.section``;
