import React from 'react';
import { organImages } from "../../assets/data/AllData";
// import { testsData } from "../../assets/data/AllData";
import axios from 'axios';
import SearchBar from '../requiredPages/SearchBar';

function TestsOrgFilterLeft({ setSearchResults }) {
    const handleOrgSel = async (event) => {
        const selectedOrg = event.currentTarget.querySelector('img').alt;
        try {
          const response = await axios.get(`https://konnectserver.infocusrx.work/orgsel?selectedorgan=${selectedOrg}`);
          setSearchResults(response.data);
          // console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    return (
      <div className="box-left">
          <div className="categories box-mb">
            <SearchBar setSearchResults={setSearchResults} />
            {/* <h4 className="h4-style">Categories</h4> */}
            <div className="organs d-flex gap-2 flex-wrap">
              {organImages.map((image, index) => (
                <div className="org-item" key={index} onClick={handleOrgSel}>
                  <img src={image.src} alt={image.alt} />
                  <p>{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="Packages box-mb">
            <h4 className="h4-style">Packages</h4>
            {testsData.map((item) => (
              <div className="test-info">
                <p className="test-category">{item.category}</p>
              </div>
            ))}
          </div> */}
      </div>
    )
}

export default TestsOrgFilterLeft
