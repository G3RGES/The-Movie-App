import React from "react";
import Navbar from "../Nav/Navbar";
import { Outlet } from "react-router-dom";

const MainComponent = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default MainComponent;
