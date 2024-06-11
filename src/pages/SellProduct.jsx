import React from "react";
import Cart from "../components/Cart";
import GetProducts from "../components/GetProducts";

export default function SellProduct() {
  return (
    <div>
      <h1 className="font-semibold text-xl"> Sell Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className=" md:col-span-5 ">
          <Cart />
        </div>
        <div className=" md:col-span-2">
          <GetProducts />
        </div>
      </div>
    </div>
  );
}
