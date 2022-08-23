import React from "react";

import classes from "./gameItem.module.css";

const GameItem = (props) => {
  console.log(props.id);

  return (
    <div className={classes.gameItem}>
      <div className={classes.leftPanel}></div>
      <p className={classes.price}>{props.name}</p>
      <div className={classes.rightPanel}></div>
    </div>
  );
};

export default GameItem;
