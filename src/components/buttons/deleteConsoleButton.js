import React from "react";

import classes from "./deleteConsoleButton.module.css";

import deleteButton from "../../assets/icons/delete.png";

const DeleteConsoleButton = () => {
  return (
    <button className={classes.deleteConsoleButton}>
      <img className={classes.deleteConsoleImg} src={deleteButton}></img>
    </button>
  );
};

export default DeleteConsoleButton;
