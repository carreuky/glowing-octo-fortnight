import React, { useState, useMemo, useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Table, Button, InputNumber, Input, Form, Radio } from "antd";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../context/CartProvider";

export default function Cart() {
  //   const [selectedDate, setSelectedDate] = useState(dayjs());

  // const [cartItems, setCartItems] = useState([
  //   {
  //     key: 0,
  //     product: "Product 1",
  //     quantity: 2,
  //     selling_price: 50,
  //     total: 100,
  //   },
  //   {
  //     key: 1,
  //     product: "Product 2",
  //     quantity: 1,
  //     selling_price: 30,
  //     total: 30,
  //   },
  //   {
  //     key: 2,
  //     product: "Product 3",
  //     quantity: 4,
  //     selling_price: 25,
  //     total: 100,
  //   },
  // ]);
  const { cart, setCart } = useContext(CartContext);
  const [showBothAmounts, setShowBothAmounts] = useState(false);


  const handleDelete = (key) => {
    setCart(cart.filter((item) => item.key !== key));
  };

  const handleIncreaseQuantity = (key) => {
    setCart(
      cart.map((item) => {
        if (item.key === key) {
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.selling_price,
          };
        }
        return item;
      })
    );
  };

  const handleDecreaseQuantity = (key) => {
    setCart(
      cart.map((item) => {
        if (item.key === key && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.selling_price,
          };
        }
        return item;
      })
    );
  };
  const handlePaymentMethodChange = (e) => {
    setShowBothAmounts(e.target.value === "both");
  };
  const onFinish = async (values) => {
    const saleData = cart.map((item) => ({
      ...item,
      payment_method: values.paymentMethod,
      // mpesa_amount: values.mpesaAmount || 0,
      // cash_amount: values.cashAmount || 0,
    }));

    console.log(saleData)
    setCart([])
  };

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.total, 0);
  }, [cart]);

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
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
      dataIndex: "selling_price",
      key: "selling_price",
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
          {cart.length}
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
        <Table columns={columns} dataSource={cart} pagination={false} size="small" />
      </div>
      <h2 className="mt-8 mb-3">
        <strong className="text-2xl">
          Sub Total: Ksh {subtotal.toFixed(2)}/=
        </strong>
      </h2>
      <Form
        name="payment_form"
        onFinish={onFinish}
        layout="vertical"
        disabled={cart?.length === 0}
      >
        <Form.Item
          name="paymentMethod"
          label="Payment Method"
          rules={[
            { required: true, message: "Please select a payment method!" },
          ]}
        >
          <Radio.Group >
            <Radio value="mpesa">Mpesa</Radio>
            <Radio value="cash">Cash</Radio>
            <Radio value="both">Both</Radio>
          </Radio.Group>
        </Form.Item>
        {/* {showBothAmounts && (
          <div className="flex gap-4">
            <Form.Item
              name="mpesaAmount"
              label="Mpesa Amount"
              rules={[
                { required: true, message: "Please input the Mpesa amount!" },
              ]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="cashAmount"
              label="Cash Amount"
              rules={[
                { required: true, message: "Please input the Cash amount!" },
              ]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </div>
        )} */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-default hover:bg-default"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
