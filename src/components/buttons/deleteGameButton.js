import React from "react";

import classes from "./deleteGameButton.module.css";

import deleteButton from "../../assets/icons/delete.png";

const DeleteGameButton = (props) => {
  const setStatus = (props) => {
    console.log(props);
  };

  const onClickHandler = async () => {
    const deleteURL =
      "https://mygames-12607-default-rtdb.firebaseio.com/myGames/console/" +
      props.consoleID +
      "/games/" +
      props.gameID +
      ".json";

    console.log(deleteURL);
    props.deleteGameHandler(props.gameID);

    fetch(deleteURL, { method: "DELETE" }).then(() =>
      setStatus("Delete successful")
    );
    console.log("delete game!!!!");

    console.log(props.consoleID);
    console.log(props.gameID);
  };

  return (
    <button onClick={onClickHandler} className={classes.leftPanel}>
      <img className={classes.deleteButton} src={deleteButton}></img>
    </button>
  );
};

export default DeleteGameButton;
