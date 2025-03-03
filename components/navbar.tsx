import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiHome, mdiSprout, mdiAccountCircle } from "@mdi/js";

import TopBar from "./topbar";
import Nav from "./nav";

// Drop down Nav Approach
// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

//   return (
//     <div className={styles.navbar}>
//       <TopBar setMenuStatus={setIsMenuOpen} isOpen={isMenuOpen} />
//       <Nav isOpen={isMenuOpen} />
//     </div>
//   );
// }

// no drop down nav approach
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <Icon path={mdiHome} size={1} />
      </Link>
      <Link href='/plants'>
        <Icon path={mdiSprout} size={1} />
      </Link>
      <Link href='/'>
        <Icon path={mdiAccountCircle} size={1} />
      </Link>
    </div>
  );
}
