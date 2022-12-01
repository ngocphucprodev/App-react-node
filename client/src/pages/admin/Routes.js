import React from "react";

import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Products from "./Products";

import Users from "./Users";
const RoutesDasboard = () => {
    return (
        <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/products/edit/:slug" element={<EditProduct />} />
        </Routes>
    );
};

export default RoutesDasboard;
