import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
