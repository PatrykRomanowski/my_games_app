import React, { useState, useEffect, useContext } from "react";

import classes from "./header.module.css";

import GameContext from "../store/game-context";

import pad from "../assets/pad2.jpg";
import switchIcon from "../assets/icons/switch.png";
import dsIcon from "../assets/icons/DS.png";
import wiiIcon from "../assets/icons/WII.png";
import allConsole from "../assets/icons/allConsole.png";

const Header = (props) => {
  const [allGameCounter, setAllGameCounter] = useState(0);
  const [allWiiGame, setAllWiiGame] = useState(0);
  const [allSwitchGame, setAllSwitchGame] = useState(0);
  const [all3dsGame, setAll3dsGame] = useState(0);
  const [allOtherGame, setAllOtherGame] = useState(0);

  const gameCtx = useContext(GameContext);

  useEffect(() => {
    setAllGameCounter(gameCtx.totalGames);

    gameCtx.items.forEach((item) => {
      if (item.consoleName === "WII") {
        setAllWiiGame(item.totalGames);
      } else if (item.consoleName === "3DS") {
        setAll3dsGame(item.totalGames);
      } else if (item.consoleName === "SWITCH") {
        setAllSwitchGame(item.totalGames);
      } else {
        setAllOtherGame(allOtherGame + item.totalGames);
      }
    });
  }, [gameCtx]);

  const calculationFillofBar = (numersOfGames) => {
    return (numersOfGames / gameCtx.totalGames) * 100 + "%";
  };

  const onNewConsoleHandler = () => {
    props.onShowInputNewConsoleHandler();
  };

  return (
    <div className={classes.header}>
      <img className={classes.mainImage} src={pad}></img>
      <div className={classes.chart}>
        <p className={classes.gameCounter}>My game status: {allGameCounter} </p>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={switchIcon}></img>
          <p className={classes.nameConsole}>SWITCH </p>
          <div className={classes.bar}>
            <div
              className={classes.fillBar}
              style={{
                width: `${calculationFillofBar(allSwitchGame)}`,
              }}
            ></div>
          </div>
          <p className={classes.counterGames}>{allSwitchGame}</p>
        </div>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={dsIcon}></img>
          <p className={classes.nameConsole}>3DS </p>
          <div className={classes.bar}>
            <div
              className={classes.fillBar}
              style={{
                width: `${calculationFillofBar(all3dsGame)}`,
              }}
            ></div>
          </div>
          <p className={classes.counterGames}>{all3dsGame}</p>
        </div>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={wiiIcon}></img>
          <p className={classes.nameConsole}>WII </p>
          <div className={classes.bar}>
            <div
              className={classes.fillBar}
              style={{
                width: `${calculationFillofBar(allWiiGame)}`,
              }}
            ></div>
          </div>
          <p className={classes.counterGames}>{allWiiGame}</p>
        </div>
        <div className={classes.barConteiner}>
          <img className={classes.icon} src={allConsole}></img>
          <p className={classes.nameConsole}>OTHER </p>
          <div className={classes.bar}>
            <div
              className={classes.fillBar}
              style={{
                width: `${calculationFillofBar(allOtherGame)}`,
              }}
            ></div>
          </div>
          <p className={classes.counterGames}>{allOtherGame}</p>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.container}></div>
        <button
          onClick={onNewConsoleHandler}
          className={classes.buttonNewConsoles}
        >
          <p className={classes.buttonName}>
            {props.showInputNewConsole ? "HIDDEN" : "ADD NEW CONSOLE"}
          </p>
        </button>
      </div>
    </div>
  );
};
export default Header;
