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
        <div className={classes.parametersOfGame}>
          <p>name of game: </p>
          {props.name}
        </div>
        <div className={classes.parametersOfGame}>
          <p>location:</p>
          {props.location}
        </div>
        <div className={classes.parametersOfGame}>
          <p>exact location</p>
          {props.exactLocation}
        </div>
        <div className={classes.parametersOfGame}>
          <p>price:</p>
          {props.price} PLN
        </div>

        <button className={classes.button} onClick={hiddenCartHandler}>
          hidden cart
        </button>
      </div>
    </>
  );
};

export default MoreInfoCart;
