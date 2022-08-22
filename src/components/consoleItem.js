import React from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";

const ConsoleItem = (props) => {
  const gameList = props.items.map((item) => (
    <GameItem name={item.name} price={item.price} />
  ));

  return (
    <div className={classes.cardItem}>
      <div className={classes.cardItemHeader}>WII</div>
      {gameList}
    </div>
  );
};

export default ConsoleItem;
