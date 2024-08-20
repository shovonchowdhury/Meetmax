import React, { useContext, useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdCalendarToday,
  MdMale,
  MdFemale,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const ForgotPass = () => {
  const { userForgotPass } = useContext(AuthContext);

  const handleForgotPass = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    userForgotPass(email)
      .then((res) => {
        alert("sent password reset link to your email!!!");
        console.log(res);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="w-full max-w-lg mx-auto ">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#4E5D78]">
        Forgot password?
      </h2>
      <p className="text-center text-gray-500 mb-8 font-medium">
        Enter your details to receive a rest link
      </p>
      <div className="bg-white p-8 shadow-xl rounded-2xl">
        <form className="space-y-4" onSubmit={handleForgotPass}>
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>

        <div className="mt-5">
          <Link
            to="/authentication/signIn"
            className="flex items-center gap-3 text-blue-500 justify-center"
          >
            {" "}
            <FaAngleLeft /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
