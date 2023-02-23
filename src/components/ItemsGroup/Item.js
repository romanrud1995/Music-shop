import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import { addToCart, removeToCart } from "../../redux/actions/shopingCart";

const SongItemWrapper = styled.aside`
  width: 21%;
  max-height: 20%;
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

const ImageWrapper = styled.div`
  //width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InformationWrapper = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  display: block;
  background-color: red;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 1.2em;
  width: 80%;
`;
const Colection = styled.h5`
  font-size: 1.2em;
  text-align: center;
  color: palevioletred;
  width: 80%;
`;
const Artist = styled.h6`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  width: 80%;
`;
const Price = styled.h5`
  font-size: 1.2em;
  text-align: center;
  color: palevioletred;
  width: 80%;
`;

const Container = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
`;

const GirdIt = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const Item = ({ props }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(props));
    setIsActive(!isActive);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeToCart(props.trackId));
    setIsActive(!isActive);
  };

  return (
    <>
      <Container>
        <GirdIt>
          <ImageWrapper>
            <img src={props.artworkUrl100} alt="logo" />
          </ImageWrapper>
          <InformationWrapper>
            <Title>{props.trackName}</Title>
            <Colection>{props.collectionName}</Colection>
            <Artist>{props.artistName}</Artist>
          </InformationWrapper>
          <PriceWrapper>
            <Price>
              {props.trackPrice} {props.currency}
            </Price>
          </PriceWrapper>
          <OptionsWrapper>
            {!isActive ? (
              <BsCartPlus onClick={handleAddToCart} />
            ) : (
              <BsCartX onClick={handleRemoveFromCart} />
            )}
          </OptionsWrapper>
        </GirdIt>
      </Container>
    </>
  );
};

export default Item;
