import React, { useRef, useContext } from "react";

import GameContext from "../../store/game-context";

import classes from "./inputNewGame.module.css";

const InputNewGame = (props) => {
  const newGameInput = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let responseData = [];

    const enterdedGame = newGameInput.current.value;

    const postURL =
      "https://mygames-12607-default-rtdb.firebaseio.com/myGames/console/" +
      props.consoleID +
      "/games.json";

    const response = await fetch(postURL, {
      method: "POST",
      body: JSON.stringify({
        game: enterdedGame,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then(async () => {
        const newObject = await fetch(postURL);
        responseData = await newObject.json();
      })
      .then(() => {
        console.log(responseData);
        props.addNewGame(responseData);
      });

    console.log(enterdedGame);
    console.log(responseData);
    newGameInput.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.container}>
      <input className={classes.input} ref={newGameInput} />
      <button className={classes.button}> ADD GAMES </button>
    </form>
  );
};

export default InputNewGame;
