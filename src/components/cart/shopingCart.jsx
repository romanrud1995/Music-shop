import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getMusicsToCart } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { removeToCart, clearCartItems } from "../../redux/actions/shopingCart";
import Total from "./cartTotal";
import { getMusicsTotal } from "../../redux/selectors";
import { BsCartX, BsCartFill } from "react-icons/bs";
import styled from "styled-components";

const Section = styled.section`
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 120px;
  width: 480px;
  border-radius: 10px;
  border-color: #2ce1a5;
  padding: 1em;
  position: absolute;
  right: 30px;
  border-style: solid;
  border-color: #92a8d1;
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
`;

const Container = styled.div``;

const CartItemCard = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CartItemImage = styled.img`
  width: 65px;
`;

const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemName = styled.h5`
  margin: 0;
`;

const CartItemPrice = styled.h6`
  margin: 0;
`;

const CartItemRemove = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`;

const RemoveIcon = styled.i`
  color: #cecece;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 30px;
`;

const ContinueShop = styled.button`
  position: relative;
  left: 426px;
  top: -33px;
`;

const TotalButton = styled.button`
  color: " #2ce2a5";
  border-color: " #2ce1a5";
  font-size: 20;
  position: "absolute";
  margin-top: 109;
  width: 36;
  border-radius: 50;
  right: 27;
`;

export default function ShopingCart() {
  const dispatch = useDispatch();
  const cartTotal = useSelector(getMusicsTotal);
  const cart = useSelector(getMusicsToCart);

  const [isHidden, setIsHidden] = useState(true);

  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  const toggleCart = () => setIsHidden(!isHidden);
  const clearCart = () => {
    dispatch(clearCartItems());
    alert("Ta feito!");
  };

  return (
    <>
      <button
        style={{
          color: " #2ce2a5",
          borderColor: " #2ce1a5",
          fontSize: 20,

          position: "absolute",
          marginTop: 109,
          width: 36,
          borderRadius: 50,
          right: 27,
        }}
      >
        {cartTotal.totalQuantity}
      </button>
      <BsCartFill
        onClick={toggleCart}
        style={{
          color: " #2ce1a5",
          fontSize: 10,
          position: "absolute",
          marginTop: 100,
          width: 50,
          borderRadius: 10,
          fontSize: 100,

          right: 30,
        }}
      ></BsCartFill>
      <Section isHidden={isHidden} ref={cartRef}>
        <div>
          <div>
            <p className="mb-1">Shopping cart</p>
            <ContinueShop onClick={toggleCart}>X</ContinueShop>

            <p className="mb-0">
              You have {cartTotal.totalQuantity} items in your cart
            </p>
          </div>
        </div>

        {cart.map((cartItem, i) => (
          <Container key={`${cartItem.trackId}${i}`}>
            <CartItemCard>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <CartItemImage
                      src={cartItem.artworkUrl100}
                      alt="Shopping item"
                    />
                  </div>
                  <CartItemText className="ms-3">
                    <CartItemName>{cartItem.trackName}</CartItemName>
                    <p className="small mb-0">{cartItem.artistName}</p>
                  </CartItemText>
                </div>
                <CartItemRemove>
                  <CartItemPrice>
                    {cartItem.trackPrice} {cartItem.currency}
                  </CartItemPrice>
                  <div>
                    <RemoveIcon
                      className="fas fa-trash-alt"
                      onClick={() => dispatch(removeToCart(cartItem.trackId))}
                    />
                    <BsCartX
                      onClick={() => dispatch(removeToCart(cartItem.trackId))}
                      style={{
                        cursor: "pointer",
                        justifyContent: "right",
                        alignItems: "center",
                        width: 25,
                        size: 40,
                      }}
                    />
                  </div>
                </CartItemRemove>
              </div>
            </CartItemCard>
          </Container>
        ))}
        <button onClick={clearCart}>Clear Cart</button>
        <Total />
      </Section>
    </>
  );
}
