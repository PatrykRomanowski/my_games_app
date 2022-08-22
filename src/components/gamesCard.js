import React, { useEffect, useState } from "react";

import ConsoleItem from "./consoleItem";
import firebaseURL from "../consts/firebase";

import classes from "./gamesCard.module.css";

const gamesWii = [
  {
    id: "w1",
    name: "mario Wii",
    price: 189.99,
    place: "less mess",
  },
  {
    id: "w2",
    name: "luigi Wii",
    price: 169.99,
    place: "less mess",
  },
];

const GamesCard = () => {
  const [wiiGames, setWiiGames] = useState([]);
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
        });
      }

      setMyConsole(responseMyConsole);
    };
    console.log(myConsole);
    fetchGames();
    setWiiGames(gamesWii);
  }, []);

  // console.log(wiiGames);

  return (
    <>
      <div className={classes.card}>
        <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} />
        <ConsoleItem items={wiiGames} console={myConsole} />
      </div>{" "}
    </>
  );
};

export default GamesCard;
