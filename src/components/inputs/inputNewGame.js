import React, { useRef } from "react";

import TextField from "@mui/material/TextField";

import Modal from "../../UI/modal";

import classes from "./inputNewGame.module.css";

const InputNewGame = (props) => {
  const newGameInput = useRef();
  const whereIsGameInput = useRef();
  const exactLocationInput = useRef();
  const purchasePriceInput = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let responseData = [];

    const enterdedGame = newGameInput.current.value;
    const eneteredWhereIsGame = whereIsGameInput.current.value;
    const enteredExactLocation = exactLocationInput.current.value;
    const enteredPrice = purchasePriceInput.current.value;

    const postURL =
      "https://mygames-12607-default-rtdb.firebaseio.com/myGames/console/" +
      props.consoleID +
      "/games.json";

    const response = await fetch(postURL, {
      method: "POST",
      body: JSON.stringify({
        game: enterdedGame,
        location: eneteredWhereIsGame,
        exactLocation: enteredExactLocation,
        price: enteredPrice,
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
          fontFamily: "arial",
        }}
        inputRef={props.refName}
      ></TextField>
    );
  };

  const InputSelectElement = (props) => {
    return (
      <TextField
        id="outlined-basic"
        label={props.name}
        variant="outlined"
        size="small"
        select
        SelectProps={{
          native: true,
        }}
        sx={{
          margin: 1,
          width: 250,
          fontFamily: "arial",
        }}
        inputRef={props.refName}
      >
        <option className={classes.option} key="HOME" value="HOME">
          HOME
        </option>
        <option className={classes.option} key="LESS MESS" value="LESS MESS">
          LESS MESS
        </option>
        <option className={classes.option} key="OTHER" value="OTHER">
          OTHER
        </option>
      </TextField>
    );
  };

  return (
    <Modal>
      <form onSubmit={onSubmitHandler} className={classes.container}>
        {/* <input className={classes.input} ref={newGameInput} /> */}

        <InputElement name="GAME TILTE" refName={newGameInput} />
        <InputSelectElement
          name="WHERE IS THIS GAME?"
          refName={whereIsGameInput}
        ></InputSelectElement>
        <InputElement
          name="EXACT LOCATION"
          refName={exactLocationInput}
        ></InputElement>
        <InputElement
          name="PURCHASE PRICE"
          refName={purchasePriceInput}
        ></InputElement>

        <button className={classes.button}> ADD GAMES </button>
      </form>
    </Modal>
  );
};

export default InputNewGame;
