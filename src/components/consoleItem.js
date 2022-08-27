import React, { useContext, useEffect, useState } from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";
import InputNewGame from "./inputNewGame";

import GameContext from "../store/game-context";

const ConsoleItem = (props) => {
  const [myGame, setMyGame] = useState([]);

  const gameCtx = useContext(GameContext);
  console.log("console item");

  useEffect(() => {
    const fetchMyGame = [];

    for (const key in props.console.gamesOnConsole) {
      fetchMyGame.push({
        id: key,
        games: props.console.gamesOnConsole[key].game,
      });
    }
    setMyGame(fetchMyGame);

    const counterGameList = fetchMyGame.length;
    const newGameForCounterGames = {
      totalGames: counterGameList,
      consoleName: props.console.myConsole,
    };
    gameCtx.initialGame(newGameForCounterGames);
  }, []);

  const addNewGame = (enterdedGame) => {
    console.log(enterdedGame);
    const newItem = {
      id: Math.random() * 9999999,
      games: enterdedGame,
    };

    setMyGame((prev) => [...prev, newItem]);

    console.log("dziala item");
    startGamecounter();
    gameCtx.addGame(props.console.myConsole);
  };

  const deleteGameHandler = (itemID) => {
    const newListGame = myGame.filter((item) => item.id !== itemID);
    setMyGame(newListGame);
  };

  const startGamecounter = () => {};

  const gameList = myGame.map((key) => (
    <GameItem
      key={key.id}
      gameID={key.id}
      name={key.games}
      consoleID={props.consoleID}
      deleteGameHandler={deleteGameHandler}
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
