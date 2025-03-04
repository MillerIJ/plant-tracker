import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiHome, mdiSprout, mdiAccountCircle } from "@mdi/js";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Link
        href='/'
        className={`${styles.navLink} ${
          router.pathname === "/" && styles.active
        }`}>
        <Icon path={mdiHome} size={1} className={styles.icon} />
      </Link>
      <Link
        href='/plants'
        className={`${styles.navLink} ${
          router.pathname === "/plants" && styles.active
        }`}>
        <Icon path={mdiSprout} size={1} />
      </Link>
      <Link
        href='/'
        className={`${styles.navLink} ${
          router.pathname === "/account" && styles.active
        }`}>
        <Icon path={mdiAccountCircle} size={1} />
      </Link>
    </div>
  );
}
