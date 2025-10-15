import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";

const Input = ({ type, name, placeholder, onChange, value, className }) => {
  const { mode: theme } = useContext(ThemeContext);
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${className} ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      />
    </>
  );
};

export default Input;
