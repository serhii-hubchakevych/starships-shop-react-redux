import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { closeThankYouModal } from "../../actions";

import "./thank-you-modal.css";

const ThankYouModal = props => {
  const { closeThankYouModal } = props;

  return (
    <div className="full-size-container">
      <DoneAllIcon
        style={{ color: "green", marginRight: 10, height: 100, width: 100 }}
      />
      Your order #{Math.floor(Math.random() * 10 + 1)} was successfully formed!
      <Link to="/" onClick={() => closeThankYouModal()}>
        I WANT BUY MORE STARSHIPS!!!
      </Link>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { closeThankYouModal };

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouModal);
