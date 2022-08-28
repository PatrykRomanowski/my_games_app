import React, { useRef } from "react";

import classes from "./inputNewGame.module.css";

const InputNewGame = (props) => {
  const newGameInput = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

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
        const responseData = await newObject.json();
        console.log(responseData);
      });
    console.log(enterdedGame);
    props.addNewGame(enterdedGame);
    newGameInput.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.container}>
      <input className={classes.input} ref={newGameInput} />{" "}
      <button className={classes.button}> ADD GAMES </button>{" "}
    </form>
  );
};

export default InputNewGame;
