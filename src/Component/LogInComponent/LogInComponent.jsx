import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
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

const LogInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#4E5D78]">
        Sign In
      </h2>
      <p className="text-center text-gray-500 mb-8 font-medium">
        Create an account to continue and connect with the people.
      </p>

      <div className="bg-white p-8 shadow-lg rounded-2xl">
        <div className="flex justify-between mb-4">
          <button className="flex items-center justify-center w-full px-4 py-2 border rounded-lg text-[#4E5D78] hover:bg-gray-100 mr-2 text-base font-medium">
            <FaGoogle className="mr-2" /> Log in with Google
          </button>
          <button className=" text-base font-medium flex items-center justify-center w-full px-4 py-2 border rounded-lg text-[#4E5D78] hover:bg-gray-100 ml-2 ">
            <FaApple className="mr-2" /> Log in with Apple
          </button>
        </div>

        <div className="relative text-center text-gray-500 mb-3 flex gap-5 mt-8">
          <div className="border-t-2 w-1/2"></div>
          <span className=" left-0 right-0 top-1/2 transform -translate-y-1/2 bg-white px-2">
            OR
          </span>
          <div className="border-t-2 w-1/2"></div>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              id="email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <MdPerson className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              id="name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <MdLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Create Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>

          <div className="lg:flex items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="relative w-full lg:w-1/2">
              <MdCalendarToday className="absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                id="dob"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Date of Birth"
              />
            </div>
            <div className="relative flex items-center space-x-3 w-full lg:w-1/2 border rounded-lg py-2 pl-16 lg:pl-6 ">
              {selectedGender === "male" && (
                <MdMale className="absolute left-3 lg:left-2 top-1/4  text-[#4E5D78] text-xl" />
              )}
              {selectedGender === "female" && (
                <MdFemale className="absolute left-3 lg:left-2 top-1/4  text-[#4E5D78] text-xl" />
              )}
              <div className="lg:ml-3 space-x-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio text-blue-500"
                    checked={selectedGender === "male"}
                    onChange={handleGenderChange}
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio text-blue-500 ml-3"
                    checked={selectedGender === "female"}
                    onChange={handleGenderChange}
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </a>
        </div> */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
      </div>

      {/* <p className="text-center text-gray-500 mt-6">
        You haven't any account?{" "}
        <a href="#" className="text-blue-500">
          Sign Up
        </a>
      </p> */}
    </div>
  );
};

export default LogInComponent;
