// @/components/App.jsx
import React from "react";
import './App.css'; // Import the CSS file for styling
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import Expenses from "./pages/Expenses";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import AddProduct from "./pages/AddProduct";
import SellProduct from "./pages/SellProduct";
import Sales from "./pages/Sales";
import Items from "./pages/Items";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Products" element={<Store />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/records" element={<Transactions />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="add-items" element={<Items />} />
              <Route path="products/sell" element={<SellProduct />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
