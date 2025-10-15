import React, { useContext, useState } from "react";
import Input from "./Input";
import { userRegister } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/theme";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const { mode: theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setErrors({
        ...errors,
        nameError:
          e.target.value.length < 3
            ? "Name must be at least 3 characters"
            : e.target.value.trim() === ""
            ? "Name cannot be empty"
            : "",
      });
    }

    if (e.target.name === "username") {
      setErrors({
        ...errors,
        usernameError:
          e.target.value.length < 3
            ? "Username must be at least 3 characters"
            : e.target.value.trim() === ""
            ? "Username cannot be empty"
            : "",
      });
    }

    if (e.target.name === "email") {
      if (!e.target.value.includes("@")) {
        setErrors({
          ...errors,
          emailError: "Please enter a valid email",
        });
      } else {
        setErrors({
          ...errors,
          emailError: "",
        });
      }
    }

    if (e.target.name === "password") {
      setErrors({
        ...errors,
        passwordError:
          e.target.value.length < 8
            ? "Password must be at least 8 characters"
            : e.target.value.trim() === " "
            ? "Password cannot be empty"
            : "",
      });
    }

    if (e.target.name === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPasswordError:
          e.target.value !== formData.password ? "Passwords do not match" : "",
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const { name, email, username, password, confirmPassword } = formData;

    if (
      (!errors.nameError &&
        !errors.emailError &&
        !errors.usernameError &&
        !errors.passwordError &&
        !errors.confirmPasswordError) ||
      (errors.nameError === "" &&
        errors.emailError === "" &&
        errors.usernameError === "" &&
        errors.passwordError === "" &&
        errors.confirmPasswordError === "")
    ) {
      setFormData({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      userRegister(formData.email, formData.password);
      navigate("/login");
      console.log(formData);
    } else {
      toast.error("Form is not valid");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${
          theme === "dark" ? " text-gray-50" : "bg-gray-100 text-gray-900"
        } flex flex-col items-center justify-center gap-2 mt-5 mb-5`}
      >
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className={`${
            theme === "dark" ? "text-gray-100" : ""
          } w-96 border-1 rounded p-2 outline-0`}
          onChange={handleChange}
          value={formData.name}
        />
        <div className={`text-red-500 text-sm w-96`}>
          {errors.nameError && <p>{errors.nameError}</p>}
        </div>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          className={`${
            theme === "dark" ? "text-gray-100" : ""
          }  w-96 border-1 rounded p-2 outline-0`}
          onChange={handleChange}
          value={formData.email}
        />
        <div className={`text-red-500 text-sm w-96`}>
          {errors.emailError && <p>{errors.emailError}</p>}
        </div>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          className={`${
            theme === "dark" ? "text-gray-100" : ""
          }  w-96 border-1 rounded p-2 outline-0`}
          onChange={handleChange}
          value={formData.username}
        />
        <div className={`text-red-500 text-sm w-96`}>
          {errors.usernameError && <p>{errors.usernameError}</p>}
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className={`${
            theme === "dark" ? "text-gray-100" : ""
          }  w-96 border-1 rounded p-2 outline-0`}
          onChange={handleChange}
          value={formData.password}
        />
        <div className={`text-red-500 text-sm w-96`}>
          {errors.passwordError && <p>{errors.passwordError}</p>}
        </div>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className={`${
            theme === "dark" ? "text-gray-100" : ""
          }  w-96 border-1 rounded p-2 outline-0`}
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <div className="text-red-500 text-sm w-96">
          {errors.confirmPasswordError && <p>{errors.confirmPasswordError}</p>}
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
      <Toaster position="top-center" />
    </>
  );
};

export default Register;
