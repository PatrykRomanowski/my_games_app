import React from "react";
import ReactDOM from "react-dom";

import classes from "./modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return <>{ReactDOM.createPortal(<Backdrop />, portalElement)}</>;
};

export default Modal;
