import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./app-header.css";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Link to="/">
            <h1 className="cmp-name">STARSHIPS STORE</h1>
          </Link>
          <span className="mrg-right">Total: </span>
          <Link to="/cart" className="cart-container">
            <ShoppingBasketIcon className="cart-icon" />
            <span className="cart-desc">CART</span>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
