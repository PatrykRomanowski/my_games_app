import React from "react";

import DeleteGameButton from "./buttons/deleteGameButton";

import moreButton from "../assets/icons/more.png";

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
      <button className={classes.rightPanel}>
        <img className={classes.moreButton} src={moreButton}></img>
      </button>
    </div>
  );
};

export default GameItem;
