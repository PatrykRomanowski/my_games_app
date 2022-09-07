import React from "react";

import Modal from "../UI/modal";

import classes from "./moreInfoCart.module.css";

const MoreInfoCart = (props) => {
  const hiddenCartHandler = () => {
    props.hiddenCart();
    props.hiddenMoreInfo();
  };

  return (
    <>
      <div onClick={hiddenCartHandler} className={classes.card}>
        <button className={classes.button} onClick={hiddenCartHandler}>
          hidden Cart
        </button>
      </div>
    </>
  );
};

export default MoreInfoCart;
