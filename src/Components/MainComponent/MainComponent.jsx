import React from "react";
import Navbar from "../Nav/Navbar";
import { Outlet } from "react-router-dom";

const MainComponent = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-6">
        <Outlet />
      </div>
    </>
  );
};

export default MainComponent;
