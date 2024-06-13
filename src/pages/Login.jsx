import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section
      className="flex h-screen items-center justify-center p-4 "
      style={{
        backgroundImage: `url(/svg/wave_yellow.svg)`,
        backgroundSize: "cover",
      }}
    >
      {" "}
      <div className="flex flex-col items-center justify-center lg:w-1/3 ">
        <div className="w-full m-auto bg-white rounded-lg px-8 py-4  ">
          <span className="flex justify-center text-[#d16415] pb-3">
            <img src="/inventory.png" alt="Logo" className="h-24 w-24" />
          </span>
          <h1 className="font-bold sm:text-xl uppercase text-default">
            Login in to your account
          </h1>
          <p className="py-2">
            Welcome Back! We kindly request you to enter your details.
          </p>
          <form>
            <div className=" gap-8 mt-2">
              <div className="mt-2">
                <label className="text-default">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="jondoe"
                  className="block w-full px-4 py-2 mt-2 border-default bg-white border rounded-md"
                />
              </div>

              {/* <div className="mt-2">
              <label className="text-default">Email Address</label>
              <input
                id="emailAddress"
                type="email"
                placeholder="johndoe@gmail.com"
                className="block w-full px-4 py-2 mt-2 border-default bg-white border rounded-md"
              />
            </div> */}

              <div className="mt-2">
                <label className="text-default">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="*********"
                  className="block w-full px-4 py-2 mt-2 border-default bg-white border rounded-md focus:border-default"
                />
              </div>
            </div>
            <Link to="/dashboard
            ">
              <button className="px-8 w-full mt-6  py-3 mb-8 mt-2 leading-5 text-white transition-colors duration-300 transform bg-default rounded-md">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
