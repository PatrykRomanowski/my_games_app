import React, { useContext, useEffect, useState } from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";
import InputNewGame from "./inputs/inputNewGame";
import MoreForListButton from "./buttons/moreForListutton";

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

  const addNewGame = (games) => {
    const updatedMyGame = [];

    for (const key in games) {
      console.log(key);
      updatedMyGame.push({
        id: key,
        games: games[key].game,
      });
    }

    setMyGame(updatedMyGame);
    gameCtx.addGame(props.console.myConsole);
  };

  const deleteGameHandler = (itemID) => {
    const newListGame = myGame.filter((item) => item.id !== itemID);
    setMyGame(newListGame);
    gameCtx.deleteGame(props.console.myConsole);
  };
  let gameCounter = 0;

  const gameList = myGame.map((key) => {
    gameCounter = gameCounter + 1;
    return gameCounter <= 5 ? (
      <GameItem
        key={key.id}
        gameID={key.id}
        name={key.games}
        consoleID={props.consoleID}
        deleteGameHandler={deleteGameHandler}
      />
    ) : (
      <MoreForListButton />
    );
  });

  return (
    <div className={classes.cardItem}>
      <div className={classes.cardItemHeader}>{props.console.myConsole}</div>
      <InputNewGame addNewGame={addNewGame} consoleID={props.consoleID} />
      {gameList}
    </div>
  );
};

export default ConsoleItem;
