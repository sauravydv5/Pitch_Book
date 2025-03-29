import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./src/Components/Header/Header";
import Home from "./src/Home/Pages/Home/Home";
import Product from "./src/Components/Products/Product";
import Solution from "./src/Components/Solutions/Solution";
import Login from "./src/Components/LoginPage/Login";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
