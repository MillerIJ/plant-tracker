import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

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

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href='/'>Home</Link>
      <Link href='/plants'>Plants</Link>
    </div>
  );
}
