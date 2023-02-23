import { getMusicsFromAPI } from "../../redux/actions/musics";
import { getMusicsToDisplay, getServiceStatus } from "../../redux/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item2";
import { Button, Card, Row, Col } from "react-bootstrap";
import ShoppingCart from "../cart/showCart";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledCol = styled.div`
  flex: 1;
  max-width: calc(50% - 1rem);
  @media (max-width: 768px) {
    max-width: calc(50% - 1rem);
  }
`;

export default function ListItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicsFromAPI());
  }, [dispatch]);

  let bIsServiceLoading = useSelector(getServiceStatus);
  let aMusicsToDisplay = useSelector(getMusicsToDisplay);

  return (
    <StyledRow>
      {aMusicsToDisplay.length > 0 ? (
        <>
          {aMusicsToDisplay.map((music) => (
            <StyledCol key={music.trackId}>
              <Item key={music.trackId} props={music} />
            </StyledCol>
          ))}
        </>
      ) : (
        <div>Não há mús músicas</div>
      )}
    </StyledRow>
  );
}
