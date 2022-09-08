import React, { useContext, useEffect, useState } from "react";

import classes from "./consoleItem.module.css";

import GameItem from "./gameItem";
import InputNewGame from "./inputs/inputNewGame";
import MoreForListButton from "./buttons/moreForListutton";
import BackGameListButton from "./buttons/backGameList";

import addIcon from "../assets/icons/add.png";

import GameContext from "../store/game-context";

const ConsoleItem = (props) => {
  const [myGame, setMyGame] = useState([]);
  const [addNewGameToggle, setAddNewGameToogle] = useState(false);
  const [showMoreGame, serShowMoreGame] = useState(false);
  const [nextCart, setNextCart] = useState(5);

  const gameCtx = useContext(GameContext);

  useEffect(() => {
    const fetchMyGame = [];

    for (const key in props.console.gamesOnConsole) {
      fetchMyGame.push({
        id: key,
        games: props.console.gamesOnConsole[key].game,
        location: props.console.gamesOnConsole[key].location,
        exactLocation: props.console.gamesOnConsole[key].exactLocation,
        price: props.console.gamesOnConsole[key].price,
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
        location: games[key].location,
        exactLocation: games[key].exactLocation,
        price: games[key].price,
      });
    }

    setMyGame(updatedMyGame);
    gameCtx.addGame(props.console.myConsole);
    setAddNewGameToogle(!addNewGameToggle);
  };

  const deleteGameHandler = (itemID) => {
    const newListGame = myGame.filter((item) => item.id !== itemID);
    setMyGame(newListGame);
    gameCtx.deleteGame(props.console.myConsole);
  };

  const moreInfoHandler = () => {
    props.moreInfoHandler();
  };

  const hiddenMoreInfo = () => {
    props.hiddenMoreInfo();
  };

  const showAddNewGamePanelHandler = () => {
    setAddNewGameToogle(!addNewGameToggle);
  };

  const nextCartHandler = () => {
    console.log("click");
    setNextCart(nextCart + 5);
  };

  const backCartHandler = () => {
    setNextCart(nextCart - 5);
  };

  let gameCounter = 0;
  let gameList = [{}];

  if (!showMoreGame) {
    gameList = myGame.map((key) => {
      gameCounter = gameCounter + 1;
      return gameCounter <= nextCart && gameCounter >= nextCart - 5 ? (
        <GameItem
          key={key.id}
          gameID={key.id}
          gameInfo={key}
          consoleID={props.consoleID}
          deleteGameHandler={deleteGameHandler}
          moreInfoHandler={moreInfoHandler}
          hiddenMoreInfo={hiddenMoreInfo}
        />
      ) : null;
    });
  }

  return (
    <div className={classes.cardItem}>
      <div className={classes.cardItemHeader}>
        <div className={classes.leftPanel}></div>
        <div className={classes.consoleName}> {props.console.myConsole}</div>
        <button
          onClick={showAddNewGamePanelHandler}
          className={classes.rightPanel}
        >
          <img className={classes.addButton} src={addIcon} />
        </button>
      </div>
      {addNewGameToggle && (
        <InputNewGame addNewGame={addNewGame} consoleID={props.consoleID} />
      )}
      {gameList}
      {gameCounter >= 6 ? (
        <div className={classes.listButtonContainer}>
          <BackGameListButton backCart={backCartHandler} />
          <MoreForListButton nextCart={nextCartHandler} />
        </div>
      ) : null}
    </div>
  );
};

export default ConsoleItem;
