import React, { useRef } from "react";

import classes from "./inputNewGame.module.css";

const InputNewGame = (props) => {
  const newGameInput = useRef();

  const buttonHandler = async (event) => {
    event.preventDefault();

    const enterdedGame = newGameInput.current.value;

    const postURL =
      "https://mygames-12607-default-rtdb.firebaseio.com/myGames/console/" +
      props.consoleID +
      "/games.json";

    const respone = await fetch(postURL, {
      method: "POST",
      body: JSON.stringify({
        game: enterdedGame,
      }),
    });
    console.log(enterdedGame);
    props.addNewGame(enterdedGame);
  };

  return (
    <div className={classes.container}>
      <input className={classes.input} ref={newGameInput} />
      <button className={classes.button} onClick={buttonHandler}>
        ADD GAMES
      </button>
    </div>
  );
};

export default InputNewGame;
