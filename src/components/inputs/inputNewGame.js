import React, { useRef } from "react";

import TextField from "@mui/material/TextField";

import classes from "./inputNewGame.module.css";

const InputNewGame = (props) => {
  const newGameInput = useRef();
  const whereIsGameInput = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let responseData = [];

    const enterdedGame = newGameInput.current.value;
    const eneteredWhereIsGame = whereIsGameInput.current.value;

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

  const InputElement = (props) => {
    return (
      <TextField
        id="outlined-basic"
        label={props.name}
        variant="outlined"
        size="small"
        sx={{
          margin: 1,
          width: 250,
        }}
        inputRef={props.refName}
      />
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.container}>
      {/* <input className={classes.input} ref={newGameInput} /> */}

      <InputElement name="GAME TILTE" refName={newGameInput} />
      <InputElement name="WHERE IS THIS GAME?" refName={whereIsGameInput} />

      <button className={classes.button}> ADD GAMES </button>
    </form>
  );
};

export default InputNewGame;
