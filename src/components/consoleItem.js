import React from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";
import InputNewGame from "./inputNewGame";

const ConsoleItem = (props) => {
  const myGame = [];

  for (const key in props.console.gamesOnConsole) {
    myGame.push({
      id: key,
      games: props.console.gamesOnConsole[key].game,
    });
  }

  const gameList = myGame.map((key) => (
    <GameItem key={key.id} id={key.id} name={key.games} />
  ));

  return (
    <div className={classes.cardItem}>
      <div className={classes.cardItemHeader}>{props.console.myConsole}</div>
      <InputNewGame consoleID={props.consoleID} />
      {gameList}
    </div>
  );
};

export default ConsoleItem;
