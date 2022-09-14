import React from "react";

import classes from "./deleteConsoleButton.module.css";

import deleteButton from "../../assets/icons/delete.png";

const DeleteConsoleButton = (props) => {
  const consoleID = props.consoleID;
  const deleteConsoleHandler = async () => {
    const deleteURL =
      "https://mygames-12607-default-rtdb.firebaseio.com/myGames/console/" +
      props.consoleID +
      ".json";

    fetch(deleteURL, { method: "DELETE" })
      .then(() => console.log("Delete successful"))
      .then(() => props.deleteConsole(consoleID));
  };
  return (
    <button
      onClick={deleteConsoleHandler}
      className={classes.deleteConsoleButton}
    >
      <img className={classes.deleteConsoleImg} src={deleteButton}></img>
    </button>
  );
};

export default DeleteConsoleButton;
