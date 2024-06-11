import React from "react";
import Products from "../components/tables/Products";
import { Link } from "react-router-dom";
export default function Store() {
  return (
    <div>
      <h1 className="text-2xl">Products in Store</h1>
      <div className="flex gap-6 my-4">
        <Link to="add">
          <button className="bg-color2 px-4 py-2 text-white rounded">
            Add
          </button>
        </Link>
        <Link to='sell'>
          <button className="bg-color2 px-4 py-2 text-white rounded">
            Sell Product
          </button>
        </Link>
      </div>
      <Products />
    </div>
  );
}
