import React from "react";
import Sales from "../components/Sales";
import Profits from "../components/Profits";
import Card from "../components/ui/Card";
import { BsCart4, BsCartPlus } from "react-icons/bs";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import { GiProfit } from "react-icons/gi";
import StockAlert from "../components/StockAlert";
import salesData from "../api/SalesData";
import dayjs from 'dayjs';


export default function Dashboard() {
  const today = dayjs().format('YYYY-MM-DD');

// Filter the sales data for today's date
const todaysData = salesData.filter(item => item.sale_date === "2023-05-31");
// Calculate the total summation for today's sales
const totalSum = todaysData.reduce((sum, item) => sum += item.total, 0);
const totalProfit = todaysData.reduce((sum, item) => sum += (item.buying_price * item.quantity), 0);
// const totalPurchases = todaysData.reduce((sum, item) => sum += (item.buying_price * item.quantity), 0);




  return (
    <div className="">
      <h1 className="text-lg pb-2">Dashboard</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <Card icon={<BsCart4 />} title="Todays Sales" number={totalSum} />
        <Card icon={<BsCartPlus />} title="Todays Purchases" number="16,000" />
        <Card icon={<GiProfit />} title="Todays Profits" number={totalProfit} />
        {/* <Card icon={<BsCart4 />} title="This Mon" number="6,000" /> */}
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 my-4 pt-4 ">
        <div className="sm:col-span-3">
          <BarChart />
        </div>
        <div className="sm:col-span-1">
          <PieChart />
        </div>
      </div>
      <StockAlert/>
      {/* <div className="grid md:grid-cols-2 gap-4">
        <Sales />
        <Profits />
      </div> */}
    </div>
  );
}
