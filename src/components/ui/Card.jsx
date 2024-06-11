import React from "react";
import { BsCart4 } from "react-icons/bs";

export default function Card({ title, number, icon }) {
  return (
    <div className=" rounded-md border border-color2 bg-white px-4 py-6 space-x-4 flex drop-shadow-md">
      <div className="text-6xl text-default">{icon}</div>
      <div className="space-y-2">
        <h1 className="text-xl">{title}</h1>
        <p className="font-bold text-2xl">Ksh {number}</p>
      </div>
    </div>
  );
}
