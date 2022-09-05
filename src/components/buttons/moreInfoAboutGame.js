import React, { useState } from "react";

import MoreInfoCart from "../moreInfoCart";

import moreButton from "../../assets/icons/more.png";

import classes from "./moreInfoAboutGame.module.css";

const MoreInfo = () => {
  const [showInfoCart, setShowInfoCart] = useState(false);

  const showHiddenCartHandler = () => {
    setShowInfoCart(!showInfoCart);
    console.log(showInfoCart);
    console.log("dziala");
  };

  return (
    <>
      <button onClick={showHiddenCartHandler} className={classes.rightPanel}>
        <img className={classes.moreButton} src={moreButton}></img>
      </button>
      {showInfoCart && <MoreInfoCart hiddenCart={showHiddenCartHandler} />}
    </>
  );
};

export default MoreInfo;
