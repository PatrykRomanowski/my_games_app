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

  const addNewGame = (enterdedGame) => {
    console.log(enterdedGame);
    const newItem = {
      id: "333",
      games: enterdedGame,
    };

    setMyGame((prev) => [...prev, newItem]);

    console.log("dziala item");
    console.log(myGame);
  };

  const gameList = myGame.map((key) => (
    <GameItem
      key={key.id}
      gameID={key.id}
      name={key.games}
      consoleID={props.consoleID}
    />
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
