import React, { useState, useContext } from "react";
import { Table, Input, Button } from "antd";
import originData from "../api/ProductData";
import { CartContext } from "../context/CartProvider";

export default function GetProducts() {
  const [searchText, setSearchText] = useState("");
  const { Search } = Input;
  const { addToCart } = useContext(CartContext);

  const products = originData;

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button type="primary" className="bg-default" onClick={() => addToCart(record)}>
          Add to Cart
        </Button>
      ),
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="md:mt-16 shadow-lg space-y-2 px-4">
      <div className="container mx-auto ">
        <p className="text-default font-semibold pb-2">
          Search product to add to cart.
        </p>
        <Search
          placeholder="Search products"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText ? (
          <Table
            columns={columns}
            dataSource={filteredProducts}
            pagination={{
              defaultPageSize: 4,
            }}
          />
        ) : (
          <div className="flex items-center justify-center text-color2">
            <img
              src="/svg/search.svg"
              alt="search"
              className="h-32 sm:h-96 m-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}
