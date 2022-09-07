import React from "react";

import DeleteGameButton from "./buttons/deleteGameButton";

import MoreInfo from "./buttons/moreInfoAboutGame";

import classes from "./gameItem.module.css";

const GameItem = (props) => {
  const deleteGameHandler = (itemID) => {
    props.deleteGameHandler(itemID);
  };

  const moreInfoHandler = () => {
    props.moreInfoHandler();
  };

  const hiddenMoreInfo = () => {
    props.hiddenMoreInfo();
  };

  return (
    <div className={classes.gameItem}>
      <DeleteGameButton
        deleteGameHandler={deleteGameHandler}
        gameID={props.gameID}
        consoleID={props.consoleID}
      />
      <p className={classes.price}>{props.name}</p>
      <MoreInfo
        moreInfoHandler={moreInfoHandler}
        hiddenMoreInfo={hiddenMoreInfo}
      />
    </div>
  );
};

export default GameItem;
