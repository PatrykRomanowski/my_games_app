import React from "react";

import classes from "./gameItem.module.css";

const GameItem = (props) => {
  return (
    <div className={classes.gameItem}>
      <p>{props.price}</p>;
    </div>
  );
};

export default GameItem;
