import React, { useEffect, useState } from "react";

import ConsoleItem from "./consoleItem";
import firebaseURL from "../consts/firebase";

import classes from "./gamesCard.module.css";

import InputNewConsole from "./inputs/inputNewConsole";

const GamesCard = (props) => {
  const [myConsole, setMyConsole] = useState([]);
  const [showInputNewConsole, setShowInputNewConsole] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(firebaseURL);
      const responseData = await response.json();
      console.log(responseData);

      const responseMyConsole = [];

      for (const key in responseData) {
        responseMyConsole.push({
          id: key,
          myConsole: responseData[key].name,
          gamesOnConsole: responseData[key].games,
        });
      }
      setMyConsole(responseMyConsole);
      console.log(responseMyConsole);
    };

    fetchGames();
  }, []);

  const updateMyConsole = (responseData) => {
    console.log("update!!!!");
    console.log(responseData);

    const responseMyConsole = [];

    for (const key in responseData) {
      responseMyConsole.push({
        id: key,
        myConsole: responseData[key].name,
        gamesOnConsole: responseData[key].games,
      });
    }
    setMyConsole(responseMyConsole);
  };

  const deleteConsole = (props) => {
    const newConsoleList = myConsole.filter((item) => item.id !== props);
    // console.log(props);
    // console.log(newConsoleList);
    setMyConsole(newConsoleList);
  };

  const moreInfoHandler = () => {
    props.moreInfoHandler();
  };

  const hiddenMoreInfo = () => {
    props.hiddenMoreInfo();
  };

  const onNewConsoleHandler = () => {
    setShowInputNewConsole(!showInputNewConsole);
  };

  const gameList = myConsole.map((item) => (
    <ConsoleItem
      key={item.id}
      consoleID={item.id}
      console={item}
      moreInfoHandler={moreInfoHandler}
      hiddenMoreInfo={hiddenMoreInfo}
      deleteConsole={deleteConsole}
    />
  ));

  return (
    <>
      <div className={classes.card}>
        <div className={classes.container}>
          <button
            onClick={onNewConsoleHandler}
            className={classes.buttonNewConsoles}
          >
            <p className={classes.buttonName}>
              {showInputNewConsole
                ? "HIDDEN INPUT NEW CONSOLE"
                : "ADD NEW CONSOLE"}
            </p>
          </button>
        </div>

        {showInputNewConsole && (
          <InputNewConsole updateMyConsole={updateMyConsole} />
        )}

        {gameList}
        {/* <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} /> */}
      </div>
    </>
  );
};

export default GamesCard;
