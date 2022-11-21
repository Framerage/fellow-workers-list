import Header from "components/Header/Header";
import Home from "pages/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./layout.scss";
const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/:id" />
      </Routes>
    </div>
  );
};
export default Layout;
