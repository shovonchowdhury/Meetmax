import React, { useContext, useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const { userSignIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(email, pass);

    setError("");

    if (!email || !pass) {
      setError("Please enter Email and Password");
      return;
    }

    userSignIn(email, pass)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError("Wrong Email or password");
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#4E5D78]">
        Sign In
      </h2>
      <p className="text-center text-gray-500 mb-8 font-medium">
        Welcome back, you’ve been missed!
      </p>

      <div className="bg-white px-2 py-4 md:px-8 md:py-8 shadow-lg rounded-2xl">
        <div className="flex justify-between gap-3 md:gap-4 mb-4">
          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center w-full px-3 md:px-4 py-2 border rounded-lg text-[#4E5D78] hover:bg-gray-100 text-sm font-medium  md:text-base"
          >
            <FaGoogle className="mr-1 md:mr-2" />{" "}
            <span className="">Log in with Google</span>
          </button>
          <button className=" text-sm font-medium flex items-center justify-center w-full px-3 md:px-4 py-2 border rounded-lg text-[#4E5D78] hover:bg-gray-100 md:text-base">
            <FaApple className="mr-1 md:mr-2" />{" "}
            <span className="">Log in with Apple</span>
          </button>
        </div>

        <div className="relative text-center text-gray-500 mb-3 flex gap-5 mt-8">
          <div className="border-t-2 w-1/2"></div>
          <span className=" left-0 right-0 top-1/2 transform -translate-y-1/2 bg-white px-2">
            OR
          </span>
          <div className="border-t-2 w-1/2"></div>
        </div>

        <form className="space-y-4" onSubmit={handleSignIn}>
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
            />
          </div>

          <div className="relative">
            <MdLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>

          {error && <p className="text-red-700">* {error}</p>}

          <div className="flex items-center justify-between text-[#4E5D78] font-medium">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">Remember me</span>
            </label>

            <Link to="/authentication/forgotPass" className=" text-sm">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          You haven't any account?{" "}
          <Link to="/authentication/signUp" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
