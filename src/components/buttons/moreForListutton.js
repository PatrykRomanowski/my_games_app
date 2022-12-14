import React, { useState } from "react";

import more_list from "../../assets/icons/arrow.png";

import classes from "./moreForListButton.module.css";

const MoreForListButton = (props) => {
  return (
    <button onClick={props.nextCart} className={classes.button}>
      <img className={classes.image} src={more_list}></img>
    </button>
  );
};

export default MoreForListButton;
