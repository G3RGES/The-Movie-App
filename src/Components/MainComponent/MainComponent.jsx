import React from "react";
import Navbar from "../Nav/Navbar";
import { Outlet } from "react-router-dom";
import { toggleTheme } from "../../store/themeSlice";
// import { useSelector, connect, useDispatch } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const MainComponent = () => {
  const theme = useSelector((state) => state.theme.mode);
  // const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

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
