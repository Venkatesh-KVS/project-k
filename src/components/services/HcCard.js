import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HcCard = ({ id, title }) => {
  //   const [isContentVisible, setIsContentVisible] = useState(false);

  //   const toggleContentVisibility = () => {
  //     setIsContentVisible((prevState) => !prevState);
  //   };

  return (
    <Wrapper>
      <div className="card">
        <h3>{title}</h3>
        {/* <img src={imageUrl} alt={title} /> */}
        <Link to={`/details/${id}`}>Read More</Link>
        {/* {isContentVisible && <p>{data.price}</p>} */}
      </div>
    </Wrapper>
  );
};

export default HcCard;

const Wrapper = styled.section``;
