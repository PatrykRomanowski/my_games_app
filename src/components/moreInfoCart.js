import React from "react";

import Modal from "../UI/modal";

import classes from "./moreInfoCart.module.css";

const MoreInfoCart = (props) => {
  const hiddenCartHandler = () => {
    props.hiddenCart();
    props.hiddenMoreInfo();
  };

  console.log(props.name);

  return (
    <>
      <div className={classes.infoCart}>
        <div>{props.name}</div>
        <div>{props.location}</div>
        <div>{props.exactLocation}</div>
        <div>{props.price}</div>

        <button className={classes.button} onClick={hiddenCartHandler}>
          hidden Cart
        </button>
      </div>
    </>
  );
};

export default MoreInfoCart;
