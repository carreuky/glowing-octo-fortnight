import React from "react";
import Sparkline from "./charts/Sparkline";
export default function Profit() {
  const sampleData = [
    5, 10, 5, 20, 8, 15, 20, 25, 20, 15, 20, 15, 10, 0, 10, 5,
  ];
  const days = [
    "Sep 1",
    "Sep 2",
    "Sep 3",
    "Sep 4",
    "Sep 5",
    "Sep 6",
    "Sep 7",
    "Sep 8",
    "Sep 9",
    "Sep 10",
    "Sep 11",
    "Sep 12",
    "Sep 13",
    "Sep 14",
    "Sep 15",
  ];

  return (
    <div className=" rounded bg-white  space-y-1 border border-color2 p-2">
      <h1 className="font-semibold">Profits</h1>
      <p className="font-bold text-2xl">Ksh 25400</p>
      <Sparkline data={sampleData} days={days} lineColor = "#09275e" markerColor = "#d16415" height={80} />

    </div>
  );
}
