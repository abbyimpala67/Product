import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const viewCart = () => {
    console.log("view cart");
  };
  return (
    <div className="ui menu">
      <Link to={"/"}>
        <div className="ui container">
          <h2>Shopper's Stop</h2>
          <div
            class="ui icon input"
            style={{ marginTop: "-3.5%", float: "right" }}
          >
            <input class="prompt" type="text" placeholder="" />
            <i class="search icon"></i>
          </div>
          <div
            class="ui icon input"
            style={{ marginTop: "-2%", marginRight: "-5%", float: "right" }}
            onClick={viewCart}
          >
            <i class="cart arrow down icon"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
