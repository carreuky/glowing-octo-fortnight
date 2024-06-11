import React from "react";
import StockAlertTable from "../components/tables/StockAlert";

export default function StockAlert() {
  const data = [
    {
      key: "1",
      code: "001",
      product: "Product A",
      quantity: 3,
      alertQuantity: 5,
    },

    {
      key: "2",
      code: "002",
      product: "Product B",
      quantity: 6,
      alertQuantity: 5,
    },
    {
      key: "3",
      code: "003",
      product: "Product C",
      quantity: 2,
      alertQuantity: 5,
    },
    {
      key: "4",
      code: "004",
      product: "Product D",
      quantity: 8,
      alertQuantity: 5,
    },
    {
      key: "5",
      code: "005",
      product: "Product E",
      quantity: 1,
      alertQuantity: 5,
    },
  ];

  return (
    <div className="shadow-md">
      <h1 className="text-center">Stock Alert</h1>
      <StockAlertTable data={data}/>
    </div>
  );
}

