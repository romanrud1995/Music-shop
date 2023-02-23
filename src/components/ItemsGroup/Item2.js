import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../redux/actions/shopingCart";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  object-fit: cover;
  height: 200px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const CardSubtitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.div`
  margin-bottom: 1rem;
`;

const CardSub = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #6c757d;
`;

const AddToCartButton = styled(Button)`
  width: 100%;
`;

const RemoveFromCartButton = styled(Button)`
  width: 100%;
  background-color: #dc3545;
  border-color: #dc3545;
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
    <StyledCard>
      <CardImg src={props.artworkUrl100} />
      <CardBody>
        <CardTitle>
          <span>{props.trackName}</span>
        </CardTitle>
        <CardSubtitle>
          <span>{props.collectionName}</span>
        </CardSubtitle>
        <CardText>{props.artistName}</CardText>
        <div style={{ marginTop: "auto" }}>
          <CardSub>
            <span style={{ marginLeft: "0.5rem" }}>
              Price: {props.trackPrice} {props.currency}
            </span>
          </CardSub>
          {!isActive ? (
            <AddToCartButton onClick={handleAddToCart}>
              + Add To Cart
            </AddToCartButton>
          ) : (
            <RemoveFromCartButton onClick={handleRemoveFromCart}>
              - Remove
            </RemoveFromCartButton>
          )}
        </div>
      </CardBody>
    </StyledCard>
  );
};

export default Item;
