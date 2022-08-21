import React from "react";

import classes from "./header.module.css";

import pad from "../assets/pad2.jpg";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={pad}></img>
      <p>Header</p>
    </div>
  );
};
export default Header;
