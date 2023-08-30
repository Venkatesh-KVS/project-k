import React, { useState } from "react";
import { styled } from "styled-components";
import TestsBanner from "../../components/testsComponents/TestsBanner";
import TestsFilterBarLeft from "../../components/testsComponents/TestsFilterBarLeft";
import { TestCard } from "../../components/requiredPages/TestCard";

const cardsPerPage  = 9;

const Tests = ({ handleClick }) => {
  const [searchResults, setSearchResults] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.length / cardsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = searchResults.slice(startIndex, endIndex);
  const getPageNumbers = () => {
    const visiblePageNumbers = [];
    if (currentPage > 3) {
      visiblePageNumbers.push('...');
    }
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      visiblePageNumbers.push(i);
    }
    if (currentPage < totalPages - 2) {
      visiblePageNumbers.push('...');
    }
    return visiblePageNumbers;
  };
  // pagination
  
  return (
    <Wrapper className="testspage">
      <TestsBanner />
      <div className="container tests-container d-flex">
        <TestsFilterBarLeft setSearchResults={setSearchResults} />
        <div className="box-right">
          <div className="box-right-top">
            <div className="categories bg-light d-flex justify-content-between align-items-center border rounded py-2">
              <h6 className="px-4 py-2 rounded text-dark fw-bold small">Total tests {searchResults.length}</h6>
            </div>
          </div>
          <div className="box-right-bottom mt-3">
            <div className="d-flex justify-content-start flex-wrap gap-3">
              {
                visibleCards.map((item) => (
                  <TestCard key={item.id} item={item} handleClick={handleClick} />
                ))
              }
            </div>
          </div>

          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/>
              </svg>
            </button>
            {getPageNumbers().map((pageNumber, index) => (
              <button 
                key={index} 
                onClick={() => {if (pageNumber !== '...') {handlePageChange(pageNumber);}}}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} >
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tests;

const Wrapper = styled.section`
  /* pagination */
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin: 0 5px;
    outline: none;
    /* padding: 5px 10px; */
    transition: color 0.3s;
  }

  .pagination button.active {
    background: linear-gradient(360deg, #005bab, #00ffbb90);
    border: none;
    color: #fff;
    border-radius: 50%;
  }
  .pagination button.active::after{
    display: none;
  }
  /* pagination */

  /* ---------------test cards */
  .ptCards {
    justify-content: space-between;
    .ptCard {
      background-color: #00ffbb;
      position: relative;
      border-radius: 15px;
      ${'' /* width: 32%; */}
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
  .tsts {
    /* background-color: #00203c; */
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: #00203c;
    border-radius: 15px;
    padding: 2rem;

    width: 48%;
    h3 {
      font-size: 1.5rem;
      color: #005bab;
      font-weight: 600;
    }
    h6 {
      font-size: 1rem;
      color: #00203c;
    }
    p {
      color: #00203c;
    }
  }
  .tst-group {
    flex-wrap: wrap;
    padding-top: 1rem;
  }
  .btn {
    color: #fff;
    font-size: 0.8rem;
    width: 6rem;
    background-color: #005bab;
    justify-content: flex-end;
  }
  .para {
    color: #bebebe;
  }
  .btn {
    float: right;
  }

  /* ---------------test cards */

  .tests-comp {
    overflow: hidden;
  }
  .container {
    color: #fff;
    padding: 50px 0;
  }
  .tests-container {
    /* background-color: antiquewhite; */
    margin: 3rem auto;
    padding: 0;
    border-radius: 15px;
    gap: 0.5rem;
  }
  .tests-container a {
    size: 1rem;
    text-decoration: none;
    color: #00203c;
    display: flex;
    margin-top: 0.5rem;
  }
  .box-mb {
    margin-bottom: 1.5rem;
  }
  /* ---------------Categories */

  a.active {
    color: #005bab;
    font-weight: 600;
  }
  .active {
    color: red;
    position: relative;
  }
  .active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 25%;
    background-color: #005bab;
  }
  .h4-style {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: #005bab;
  }

  .box-left {
    width: 20%;
    height: 100%;
    padding: 10px;
    ${'' /* background: rgba(0,0,0,0.05); */}
    .org-item{
      background: white;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      border-radius: 4px;
      width: 100%;
      padding: 5px 10px;
      ${'' /* height: 90px; */}
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;
      img {
        width: 30px;
        margin: 5px;
        ${'' /* background: red; */}
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
      &:hover p {
        color: white;
      }
    }
  }

  .box-right {
    width: 80%;
    gap: 10;
    border-radius: 15px;
    padding: 0 1.5rem;
  }

  .box-right-top {
    ${'' /* padding: 1.5rem; */}
    ${'' /* background-image: linear-gradient(180deg, #005bab, #00aeef90); */}
    ${'' /* background-color: #00ffbb50; */}
    ${'' /* margin-bottom: 2rem; */}
    border-radius: 15px;
    .categories {
      display: flex;
      align-items: center;
      vertical-align: center;
      justify-content: space-between;
    }
    a,
    h6 {
      margin: 0;
    }
    h6 {
      color: white;
    }
    .menu-item {
      display: flex;
      align-items: center;
      color: white;
    }
    .icons svg path {
      color: white;
    }
  }
`;
