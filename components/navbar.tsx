import React, { useState } from "react";
import TopBar from "./topbar";
import Nav from "./nav";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <TopBar setMenuStatus={setIsMenuOpen} isOpen={isMenuOpen} />
      <Nav isOpen={isMenuOpen} />
    </div>
  );
}
