import React, { useEffect, useState } from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";
import InputNewGame from "./inputNewGame";

const ConsoleItem = (props) => {
  const [myGame, setMyGame] = useState([]);

  useEffect(() => {
    const fetchMyGame = [];

    for (const key in props.console.gamesOnConsole) {
      fetchMyGame.push({
        id: key,
        games: props.console.gamesOnConsole[key].game,
      });
    }

    setMyGame(fetchMyGame);
  }, []);

  const addNewGame = (item) => {
    props.toogleFunction();
    console.log("dziala item");
  };

  const gameList = myGame.map((key) => (
    <GameItem key={key.id} id={key.id} name={key.games} />
  ));

  return (
    <div className={classes.cardItem}>
      <div className={classes.cardItemHeader}>{props.console.myConsole}</div>
      <InputNewGame addNewGame={addNewGame} consoleID={props.consoleID} />
      {gameList}
    </div>
  );
};

export default ConsoleItem;
