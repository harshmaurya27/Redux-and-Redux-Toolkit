import React from "react";
import "./App.css";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Outlet } from "react-router";

//

const App = () => {
  const productsList = useSelector((state) => state.products);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
