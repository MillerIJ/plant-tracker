import React from "react";

export default function Topbar({ setMenuStatus, isOpen }) {
  return (
    <div className='topbar__container'>
      <div className='topbar__menuButton'>
        <button
          type='button'
          onClick={() => {
            setMenuStatus(!isOpen);
          }}>
          Menu
        </button>
      </div>
    </div>
  );
}
