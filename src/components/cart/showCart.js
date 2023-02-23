import React, { useState } from "react";
import styled from "styled-components";

const ShoppingCart = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleCart = () => setIsHidden(!isHidden);

  return (
    <div>
      <Button onClick={toggleCart}>Show Cart</Button>
      <CartWrapper isHidden={isHidden}></CartWrapper>
    </div>
  );
};

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
`;

const CartWrapper = styled.div`
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 20px;
  position: absolute;
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CartItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CartItem = styled.li`
  margin-bottom: 5px;
`;

export default ShoppingCart;
