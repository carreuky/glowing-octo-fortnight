// @/components/App.jsx
import React from "react";
import './App.css'; // Import the CSS file for styling
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import Gas from "./pages/Gas";
import Electricals from "./pages/Electricals";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import AddProduct from "./pages/AddProduct";
import SellProduct from "./pages/SellProduct";

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
              <Route path="/lpg" element={<Gas />} />
              <Route path="/electricals" element={<Electricals />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/sell" element={<SellProduct />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
