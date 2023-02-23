import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMusicsToCart, getMusicsToDisplay } from "../redux/selectors";
import styled from "styled-components";
import { BsCartX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { searchMusics } from "../redux/actions/musics";
import { getServiceStatus } from "../redux/selectors";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [stringToSearch, setStringToSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStringToSearch(e.target.value);
    dispatch(searchMusics(e.target.value));
  };
  let bIsServiceLoading = useSelector(getServiceStatus);
  console.log(bIsServiceLoading);

  return (
    <form action="/" method="get">
      <>
        {!bIsServiceLoading && (
          <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s"
            value={stringToSearch}
            onChange={handleSubmit}
          />
        )}
      </>
    </form>
  );
};
export default SearchBar;
