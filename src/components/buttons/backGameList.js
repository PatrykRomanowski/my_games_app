import React, { useState } from "react";

import more_list from "../../assets/icons/arrow.png";

import classes from "./backGameList.module.css";

const BackGameListButton = (props) => {
  return (
    <button onClick={props.backCart} className={classes.button}>
      <img className={classes.image} src={more_list}></img>
    </button>
  );
};

export default BackGameListButton;
