import React, { useState } from 'react';
import { TestCard } from '../requiredPages/TestCard';
import axios from "axios";

const TestsGrid = async () => {
    // const postsPerPage = 9;
    const [testsData, setTestsData] = useState('');
    try {
        // const response = await axios.get(`https://konnectserver.infocusrx.work/gettests`);
        const response = await axios.get(`http://localhost:8081/gettests`);
        setTestsData(response.data);
        console.log(testsData);
    } catch (err) {
        console.log(err);
    }
    

    // const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = Math.ceil(testsData.length / postsPerPage);
  
    // const handlePageChange = (newPage) => {
    //   setCurrentPage(newPage);
    // };
  
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = testsData.slice(indexOfFirstPost, indexOfLastPost);
  
    return (
      <div className="App">
        <h1>Posts</h1>
        <div className="post-list">
          {testsData.map(item => (
            <TestCard key={item.id} item={item} />
          ))}
        </div>
        {/* <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div> */}
      </div>
    );
}

export default TestsGrid