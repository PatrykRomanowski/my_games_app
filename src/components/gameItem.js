import React from "react";

import DeleteGameButton from "./buttons/deleteGameButton";

import MoreInfo from "./buttons/moreInfoAboutGame";

import classes from "./gameItem.module.css";

const GameItem = (props) => {
  const deleteGameHandler = (itemID) => {
    props.deleteGameHandler(itemID);
  };

  return (
    <div className={classes.gameItem}>
      <DeleteGameButton
        deleteGameHandler={deleteGameHandler}
        gameID={props.gameID}
        consoleID={props.consoleID}
      />
      <p className={classes.price}>{props.name}</p>
      <MoreInfo />
    </div>
  );
};

export default GameItem;
