import React, { useState } from "react";
import { styled } from "styled-components";
import { organImages } from "../../assets/data/AllData";
import { TestCard } from "../requiredPages/TestCard";
import OrganCarousel from "../requiredPages/OrganCarousel";
import AtoZ from "../requiredPages/AtoZ";
import SearchBar from "../requiredPages/SearchBar";

const ToggleKT = ({ handleClick }) => {
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <Wrapper>
      <div className="s2-kt mt-4">
        <div className="selectionBox mx-auto d-flex gap-2 mb-4">
          <div className="a-zBox" style={{ width: "35%" }}>
            <div className="kt-a-z d-flex flex-wrap">
              <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} />
              <AtoZ setSearchResults={setSearchResults} />
            </div>
          </div>
          <div className="organsBox">
            <div className="kt-organs ">
              <OrganCarousel images={organImages} setSearchResults={setSearchResults} />
            </div>
          </div>
        </div>
        <div className="results d-flex flex-wrap gap-2 justify-content-center">
          {
            searchResults.slice(0, 8).map((item, index) => (
              <TestCard key={index} item={item} handleClick={handleClick} />
            ))
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default ToggleKT;
const Wrapper = styled.section`
  .s2-kt {
    /* background-color: grey; */
    .kt-searchBox {
      gap: 25px;
      .filterBy {
        align-items: center;
        select {
          color: ${({ theme }) => theme.colors.primary};
          border: none;
          &:focus {
            outline-style: none;
          }
        }
        svg {
          fill: ${({ theme }) => theme.colors.primary};
          width: 25px;
          height: 25px;
        }
      }
      .searchBar {
        ${'' /* background-color: ${({ theme }) => theme.colors.primary}; */}
        padding: 2px 10px;
        align-items: center;
        input {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;
          border: 2px solid ${({ theme }) => theme.colors.primary};
          font-size: 15px;
          padding: 5px 25px;
          width: 100%;
          &:focus {
            outline-style: none;
          }
        }
        svg {
          width: 10%;
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  /* ---------------------- */

  .selectionBox {
    ${'' /* width: 85%; */}
    .kt-organs {
      align-items: center;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .carousel-root {
      .carousel .slider {
        padding: 0;
      }
    }
  }
`;
