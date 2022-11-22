import Card from "components/Card/Card";
import React, { useState } from "react";
import "./home.scss";
const Home = () => {
  return (
    <main className="container">
      <div className="container__header">Fellow workers list</div>
      <div className="container__cards">
        <Card />
      </div>
    </main>
  );
};
export default Home;
