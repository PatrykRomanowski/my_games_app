import React from "react";

import deleteButton from "../assets/icons/delete.png";
import moreButton from "../assets/icons/more.png";

import classes from "./gameItem.module.css";

const GameItem = (props) => {
  return (
    <div className={classes.gameItem}>
      <button className={classes.leftPanel}>
        <img className={classes.deleteButton} src={deleteButton}></img>
      </button>
      <p className={classes.price}>{props.name}</p>
      <button className={classes.rightPanel}>
        <img className={classes.moreButton} src={moreButton}></img>
      </button>
    </div>
  );
};

export default GameItem;
