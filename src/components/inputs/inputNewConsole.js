import React, { useRef } from "react";

import TextField from "@mui/material/TextField";

import classes from "./inputNewConsole.module.css";

const InputNewConsole = () => {
  const newConsoleInput = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const entredNewConsole = newConsoleInput.current.value;

    const postURL =
      "https://mygames-12607-default-rtdb.firebaseio.com/myGames/console.json";

    const response = await fetch(postURL, {
      method: "POST",
      body: JSON.stringify({
        name: entredNewConsole,
      }),
    });

    newConsoleInput.current.value = "";
  };

  return (
    <div className={classes.inputNewConsoleContainer}>
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="outlined-basic"
          label="NEW CONSOLE"
          variant="outlined"
          size="small"
          sx={{
            margin: 1,
            width: 250,
            fontFamily: "arial",
          }}
          inputRef={newConsoleInput}
        ></TextField>

        <button className={classes.buttonNewConsole}>ADD</button>
      </form>
    </div>
  );
};

export default InputNewConsole;
