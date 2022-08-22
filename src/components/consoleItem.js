import React from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";

const ConsoleItem = (props) => {
  console.log(props.console);
  const gameList = props.items.map((item) => (
    <GameItem name={item.name} price={item.price} />
  ));

  console.log(props.console[1].myConsole);

  return (
    <div className={classes.cardItem}>
      <div className={classes.cardItemHeader}>{props.console[0].myConsole}</div>
      {gameList}
    </div>
  );
};

export default ConsoleItem;
