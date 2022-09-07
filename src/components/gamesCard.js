import React, { useEffect, useState } from "react";

import ConsoleItem from "./consoleItem";
import firebaseURL from "../consts/firebase";

import classes from "./gamesCard.module.css";

const GamesCard = (props) => {
  const [myConsole, setMyConsole] = useState([]);

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

  const moreInfoHandler = () => {
    props.moreInfoHandler();
  };

  const hiddenMoreInfo = () => {
    props.hiddenMoreInfo();
  };

  const gameList = myConsole.map((item) => (
    <ConsoleItem
      key={item.id}
      consoleID={item.id}
      console={item}
      moreInfoHandler={moreInfoHandler}
      hiddenMoreInfo={hiddenMoreInfo}
    />
  ));

  return (
    <>
      <div className={classes.card}>
        {gameList}
        {/* <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} /> */}
      </div>
    </>
  );
};

export default GamesCard;
