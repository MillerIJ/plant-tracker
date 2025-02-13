import React from "react";
import Link from "next/link";
import style from "../styles/Nav.module.css";

interface NavProps {
  isOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <div id={style["nav"]} className={isOpen ? style.open : null}>
      {isOpen ? (
        <div>
          <Link href='/'>Home</Link>
          <Link href='/plants'>Plants</Link>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
