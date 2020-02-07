import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";

import "./app-header.css";

const Header = props => {
  const { orderTotal } = props;
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Link to="/">
            <h1 className="cmp-name">STARSHIPS STORE</h1>
          </Link>
          <div className="right-parts-header">
            {orderTotal > 0 ? (
              <span className="total-cart-price">Total: {orderTotal} UAH</span>
            ) : null}
            <Link to="/cart" className="cart-container mrg-right">
              <ShoppingBasketIcon className="cart-icon" />
              <span className="cart-desc">CART</span>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = ({ cartReducer: { orderTotal } }) => ({
  orderTotal
});

export default connect(mapStateToProps)(Header);
