import { getMusicsTotal } from "../../redux/selectors";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const S = {
  PropertyValue: styled.div`
    width: 40%;
    background-color: whitesmoke;
    text-align: center;
    padding: 5px 0;
    font-size: 20px;
    color: black;
  `,
  PropertyName: styled.h3`
    color: black;
    font-size: 20px;
    text-align: center;
    background-color: #ffffff;
    width: 40%;
    background-color: whitesmoke;
  `,
  RowWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
  `,
};

const Total = () => {
  const cart = useSelector(getMusicsTotal);
  console.log("cart" + cart);
  return (
    <>
      <S.RowWrapper>
        <S.PropertyName>Total Items</S.PropertyName>
        <S.PropertyName>Montante Total</S.PropertyName>
      </S.RowWrapper>
      <S.RowWrapper>
        <S.PropertyValue>{cart.totalQuantity}</S.PropertyValue>
        <S.PropertyValue>
          {cart.totalAmount} {cart.currency}
        </S.PropertyValue>
      </S.RowWrapper>
    </>
  );
};
export default Total;
