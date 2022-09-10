import React, { useRef } from "react";

import TextField from "@mui/material/TextField";

import classes from "./inputNewConsole.module.css";

const InputNewConsole = () => {
  const newConsoleInput = useRef();

  return (
    <div className={classes.inputNewConsoleContainer}>
      <form>
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
