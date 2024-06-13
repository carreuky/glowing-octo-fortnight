import React, { Fragment } from "react";
import AddProducts from "../components/ui/forms/AddProducts";
export default function AddProduct() {
  return (
    <Fragment>
      <h1 className="text-2xl font-semibold border border-color2 py-2 px-2">Add Product</h1>
      <div className="flex justify-center items-center h-5/6 w-full">
        <div className="w-full max-w-md">
          <AddProducts />
        </div>
      </div>
    </Fragment>
  );
}
