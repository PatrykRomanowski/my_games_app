import React, { useState } from "react";

import more_list from "../../assets/icons/more_list.png";

import classes from "./moreForListButton.module.css";

const MoreForListButton = () => {
  const [showMoreGame, serShowMoreGame] = useState(true);

  return (
    <button className={classes.button}>
      <img className={classes.image} src={more_list}></img>
    </button>
  );
};

export default MoreForListButton;
