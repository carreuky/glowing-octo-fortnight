// @/components/layout/Sidebar.jsx
import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Store, Fuel, CircuitBoard } from "lucide-react";
import { BsEnvelopeAt, BsPersonCircle } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";

export default function Sidebar({ show, setter }) {
  const location = useLocation();

  // Define our base class
  const className =
    "w-[250px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-40 h-screen flex flex-col sm:justify-center";
  // Append class based on state of sidebar visibility
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      location.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        to={route}
        onClick={() => {
          setter(false);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = useCallback(
    () => (
      <div
        className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
        onClick={() => {
          setter(false);
        }}
      />
    ),
    [setter]
  );

  return (
    <>
      <div
        className={`${className}${appendClass} gap-12 bg-black`}
        style={{
          backgroundImage: `url(/svg/waves-haikei-blue.svg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="p-2 flex flex-col justify-center items-center">
          <h1 className="text-color2 text-3xl font-bold">OZARK</h1>
          <Link to="/">
            <span className="flex items-center text-[#d16415]">
              <img src="/inventory.png" alt="Logo" className="h-24 w-24" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem
            name="Dashboard"
            route="/dashboard"
            icon={<LayoutDashboard />}
          />
          <MenuItem name="Products" route="/products" icon={<Store />} />
          <MenuItem name="Gas" route="/lpg" icon={<Fuel />} />
          <MenuItem
            name="Electricals"
            route="/electricals"
            icon={<CircuitBoard />}
          />
          <MenuItem name="Contact" route="/contact" icon={<BsEnvelopeAt />} />
        </div>
        <div className="flex flex-col items-center justify-center gap-0 2xl:gap-2 2xl:gap-x-4 2xl:flex-row xl:justify-start">
          <button></button>
          <div className="flex-col items-center justify-center hidden px-0 lg:flex">
            <div className="hidden"></div>
            <div className="mt-4 2xl:mt-0 flex gap-1 flex-col items-center">
              <span className="text-white text-4xl">
                <BsPersonCircle />
              </span>
              <h3 className="font-bold text-center text-white text-tiny lg:text-left">
                OLo
              </h3>
              <span className="hidden text-xs text-center text-white xl:block 2xl:text-left">
                bar@gmail.com
              </span>
              <button className="flex mt-4 text-[#FF0000] gap-2">
                Log Out
                <span className="text-2xl">
                  <BiLogOutCircle />
                </span>
              </button>
            </div>
          </div>
          <div className="block px-4 mt-0 lg:hidden"></div>
        </div>
      </div>
      {show && <ModalOverlay />}
    </>
  );
}
