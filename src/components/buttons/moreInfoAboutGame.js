import React, { useState } from "react";

import MoreInfoCart from "../moreInfoCart";

import moreButton from "../../assets/icons/more.png";

import classes from "./moreInfoAboutGame.module.css";

const MoreInfo = (props) => {
  const [showInfoCart, setShowInfoCart] = useState(false);

  const showHiddenCartHandler = () => {
    setShowInfoCart(!showInfoCart);
    props.moreInfoHandler();
  };

  const hiddenMoreInfo = () => {
    props.hiddenMoreInfo();
  };

  return (
    <>
      <button onClick={showHiddenCartHandler} className={classes.rightPanel}>
        <img className={classes.moreButton} src={moreButton}></img>
      </button>
      {showInfoCart && (
        <MoreInfoCart
          hiddenCart={showHiddenCartHandler}
          hiddenMoreInfo={hiddenMoreInfo}
          name={props.gameInfo.games}
          price={props.gameInfo.price}
          exactLocation={props.gameInfo.exactLocation}
          location={props.gameInfo.location}
        />
      )}
    </>
  );
};

export default MoreInfo;
