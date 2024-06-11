import React, { useState, useMemo } from "react";
import { BiCartAdd } from "react-icons/bi";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Table, Button, InputNumber, Input, Form ,Radio} from "antd";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
  //   const [selectedDate, setSelectedDate] = useState(dayjs());

  const [cartItems, setCartItems] = useState([
    {
      key: 0,
      product: "Product 1",
      quantity: 2,
      rate: 50,
      total: 100,
    },
    {
      key: 1,
      product: "Product 2",
      quantity: 1,
      rate: 30,
      total: 30,
    },
    {
      key: 2,
      product: "Product 3",
      quantity: 4,
      rate: 25,
      total: 100,
    },
  ]);

  const handleDelete = (key) => {
    setCartItems(cartItems.filter((item) => item.key !== key));
  };

  const handleIncreaseQuantity = (key) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.key === key) {
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.rate,
          };
        }
        return item;
      })
    );
  };

  const handleDecreaseQuantity = (key) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.key === key && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.rate,
          };
        }
        return item;
      })
    );
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.total, 0);
  }, [cartItems]);

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <div className="flex items-center">
          <Button
            type="link"
            onClick={() => handleDecreaseQuantity(record.key)}
            className="text-red-500"
          >
            <FaMinus />
          </Button>
          <span className="mx-2">{record.quantity}</span>
          <Button
            type="link"
            onClick={() => handleIncreaseQuantity(record.key)}
            className="text-green-500"
          >
            <FaPlus />
          </Button>
        </div>
      ),
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => handleDelete(record.key)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </Button>
      ),
    },
  ];

 
  return (
    <div className="mt-4">
      <h1 className="flex gap-1 items-center mb-4">
        <span className="text-xl">Cart</span>
        <span className="text-2xl">
          <BiCartAdd />
        </span>
        <span className="bg-color2 text-white py-1 px-1.5 rounded ">
          {cartItems.length}
        </span>
      </h1>
      {/* <div className="bg-white py-4">
        <label htmlFor="date" className="block text-sm font-bold mb-2">
          Select Date
        </label>
        <DatePicker
          id="date"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="block md:w-1/4 w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div> */}

      <div className="shadow-lg">
        {" "}
        <Table columns={columns} dataSource={cartItems} pagination={false} />
      </div>
      <h2 className="mt-8 mb-3">
        <strong className="text-2xl">
          Sub Total: Ksh {subtotal.toFixed(2)}/=
        </strong>
      </h2>
      <Form className=""  >
      <Form.Item className="" label="Payment Method">
        <Radio.Group>
          <Radio value="mpesa">Mpesa</Radio>
          <Radio value="cash">Cash</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="bg-default hover:bg-default">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}
