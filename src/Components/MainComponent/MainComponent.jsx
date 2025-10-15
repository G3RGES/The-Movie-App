import React, { useContext } from "react";
import Navbar from "../Nav/Navbar";
import { Outlet } from "react-router-dom";
// import { toggleThemeMode } from "../../store/themeSlice";

// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../context/theme";
// import { changeLang } from "../../store/LangSlice";

const MainComponent = () => {
  // const theme = useSelector((state) => state.theme.mode);
  const { mode: theme } = useContext(ThemeContext);
  const lang = useSelector((state) => state.lang.lang);

  console.log(theme);
  console.log(lang);

  // const theme = useSelector((state) => state.theme);
  // const dispatch = useDispatch();

  // const setLang = () => {
  //   dispatch(changeLang(lang === "en" ? "ar" : "en"));
  // };

  // const toggleTheme = () => {
  //   dispatch(toggleThemeMode());
  // };

  return (
    <>
      <div
        className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-50"} `}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <div className="pt-20 px-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
