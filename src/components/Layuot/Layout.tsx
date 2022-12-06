import React from "react";
import Header from "components/Header";
import DescripPage from "pages/Description";
import Home from "pages/Home";
import {Route, Routes} from "react-router-dom";
import "./layout.scss";
const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/:id" element={<DescripPage />} />
      </Routes>
    </div>
  );
};
export default Layout;
