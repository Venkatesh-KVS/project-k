import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { organImages } from "../../assets/data/AllData";
// import { TestCard } from "../requiredPages/TestCard";
import OrganCarousel from "../requiredPages/OrganCarousel";
import AtoZ from "../requiredPages/AtoZ";
import SearchBar from "../requiredPages/SearchBar";
import axios from "axios";
import TestsGrid from "../testsComponents/TestsGrid";


const ToggleKT = ({ handleClick }) => {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function fetchInitialData() {
        try {
            const response = await axios.get("https://konnectserver.infocusrx.work/search?q=A");
            setSearchResults(response.data);
            console.log("fetched");
        } catch (error) {
            console.error(error);
        }
    } 
    fetchInitialData();
  }, []);
  
  return (
    <Wrapper>
      <div className="s2-kt mt-4">
        <div className="selectionBox mx-auto d-flex gap-2 mb-4">
          <div className="a-zBox mx-auto" style={{width: "70%"}}>
            <div className="kt-a-z d-flex flex-wrap">
              <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} />
              <AtoZ setSearchResults={setSearchResults} />
            </div>
          </div>
          <div className="organsBox">
            <div className="">
              <OrganCarousel images={organImages} setSearchResults={setSearchResults} />
            </div>
          </div>
        </div>
      
        <TestsGrid handleClick={handleClick} searchResults={searchResults} cardsPerPage={6} />
      </div>
    </Wrapper>
  );
};

export default ToggleKT;
const Wrapper = styled.section`
  .s2-kt {
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
    width: 950px;
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
