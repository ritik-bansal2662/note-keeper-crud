import React from "react";
import { MdNoteAdd } from "react-icons/md";
import './Header.css';

function Header() {
  return (
    <header>
      <h1>
        <MdNoteAdd /> Keeper
      </h1>
    </header>
  );
}

export default Header;
