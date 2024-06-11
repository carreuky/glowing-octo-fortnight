// @/components/layout/MenuBarMobile.jsx
import React from "react";
import { FiMenu as Icon } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MenuBarMobile({ setter }) {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-default flex [&>*]:my-auto px-2">
      <button
        className="text-4xl flex text-white"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <Icon />
      </button>
      <Link to="/" className="mx-auto">
        <span className="flex  items-center text-[#d16415] ">
          <img src="/inventory.png" alt="Logo" className="h-12 w-12" />
        </span>
      </Link>
      <Link className="text-3xl flex text-white" to="/login">
        <FaUser />
      </Link>
    </nav>
  );
}
