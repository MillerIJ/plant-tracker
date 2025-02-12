import React from "react";
import style from "../styles/Nav.module.css";

export default function Nav({ isOpen }) {
  return (
    <div id={style["nav"]} className={isOpen ? style.open : null}>
      {isOpen ? <p>OPEN</p> : <p>CLOSED</p>}
    </div>
  );
}
