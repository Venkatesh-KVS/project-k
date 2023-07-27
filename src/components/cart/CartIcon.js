import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartIcon = ({ setShow, size }) => {
  return (
    <Wrapper>
      <div className="cart-icon">
        <FaShoppingCart className="cart-icon" />
        <span className="item-count">10</span>
        {/* <span>{size}</span> */}
      </div>
    </Wrapper>
  );
};

export default CartIcon;
const Wrapper = styled.section`
  .cart-icon {
    position: relative;
    cursor: pointer;
  }

  .item-count {
    /* position: absolute; */

    /* top: -10px; */
    /* right: -10px; */
    background-color: red;
    color: white;
    border-radius: 50%;
    /* padding: 10px; */
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;
