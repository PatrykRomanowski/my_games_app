import React, { useState, useEffect, useContext } from "react";

import classes from "./header.module.css";

import GameContext from "../store/game-context";

import pad from "../assets/pad2.jpg";
import switchIcon from "../assets/icons/switch.png";
import dsIcon from "../assets/icons/DS.png";
import wiiIcon from "../assets/icons/WII.png";
import allConsole from "../assets/icons/allConsole.png";

const Header = () => {
  const [gameCounter, setGameCounter] = useState(0);

  const gameCtx = useContext(GameContext);

  useEffect(() => {
    setGameCounter(gameCtx.totalGames);
  }, [gameCtx]);

  return (
    <div className={classes.header}>
      <img className={classes.mainImage} src={pad}></img>
      <div className={classes.chart}>
        <p className={classes.gameCounter}>My game status: {gameCounter} </p>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={switchIcon}></img>
          <p className={classes.nameConsole}>SWITCH </p>
          <div className={classes.bar}></div>
          <p className={classes.counterGames}>10</p>
        </div>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={dsIcon}></img>
          <p className={classes.nameConsole}>3DS </p>
          <div className={classes.bar}></div>
          <p className={classes.counterGames}>10</p>
        </div>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={wiiIcon}></img>
          <p className={classes.nameConsole}>WII </p>
          <div className={classes.bar}>
            <div className={classes.fillBar}></div>
          </div>
          <p className={classes.counterGames}>10</p>
        </div>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={allConsole}></img>
          <p className={classes.nameConsole}>OTHER </p>
          <div className={classes.bar}></div>
          <p className={classes.counterGames}>10</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
