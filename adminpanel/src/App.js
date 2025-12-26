import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Inventory from "./Pages/Inventory";
import Analytics from "./Pages/Reports&Analytics";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";
import Categories from "./Pages/Category";
import AddProduct from "./Pages/AddProducts";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
