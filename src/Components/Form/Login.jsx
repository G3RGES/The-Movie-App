import React, { useContext, useState } from "react";
import Input from "./Input";
import { userLogin } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/theme";

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const [inputsError, setInputsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();
  const { mode: theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setLoginInputs({
      ...loginInputs,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "email") {
      setInputsError({
        ...inputsError,
        emailError:
          e.target.value.length < 3
            ? "Email must be at least 3 characters"
            : e.target.value.trim() === ""
            ? "Email cannot be empty"
            : !e.target.value.includes("@")
            ? "Please enter a valid email"
            : "",
      });
    }

    if (e.target.name === "password") {
      setInputsError({
        ...inputsError,
        passwordError:
          e.target.value.length < 8
            ? "Password must be at least 8 characters"
            : e.target.value.trim() === ""
            ? "Password cannot be empty"
            : "",
      });
    }

    // console.log(loginInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputsError.emailError && !inputsError.passwordError) {
      setLoginInputs({
        email: "",
        password: "",
      });
      userLogin(loginInputs.email, loginInputs.password);
      navigate("/");
      console.log(loginInputs);
    } else {
      toast.error("Form is not valid");
    }
  };

  return (
    <div className={`container flex flex-col justify-center items-center mt-2`}>
      <div className={`flex flex-col gap-4 justify-center items-center`}>
        <form
          action=""
          className={`${
            theme === "dark" ? " text-gray-50" : "bg-gray-100 text-gray-900"
          } flex flex-col gap-2`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className={``}>
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={loginInputs.email}
            onChange={handleChange}
            className={`border p-2 rounded outline-0`}
          />
          <label htmlFor="password" className={``}>
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={loginInputs.password}
            onChange={handleChange}
            className={`border p-2 rounded outline-0`}
          />
          <p className="text-red-500 font-medium">{inputsError.emailError}</p>{" "}
          <p className="text-red-500 font-medium">
            {inputsError.passwordError}
          </p>
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Login;
