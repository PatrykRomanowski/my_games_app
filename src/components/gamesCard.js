import React, { useEffect, useState } from "react";

import ConsoleItem from "./consoleItem";

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

  useEffect(() => {
    setWiiGames(gamesWii);
  }, []);

  console.log(wiiGames);

  return (
    <>
      <div className={classes.card}>
        <ConsoleItem items={wiiGames} />
      </div>
    </>
  );
};

export default GamesCard;
