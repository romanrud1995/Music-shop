import React from "react";
import styled from "styled-components";
import PaginationHandler from "./pagination";
import ListItem from "./ItemsGroup/ListItem";
import ShopingCart from "./cart/shopingCart";

const General = styled.main`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 98vw;
  overflow: hidden;
  margin-top: 70px !important;
  margin: 15px;

  text-align: center;
`;
const Product = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-block: 20px;
`;

export default function Main() {
  return (
    <General>
      <Product>Musics</Product>

      <ListItem></ListItem>

      <PaginationHandler />
    </General>
  );
}
