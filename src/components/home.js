import React from "react";
import Main from "./main";
import "../App.css";
import ShopingCart from "./cart/shopingCart";
function Home() {
  return (
    <div className="App">
      <div className="row">
        <Main />
        <ShopingCart />
      </div>
    </div>
  );
}

export default Home;
