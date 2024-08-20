import React, { useContext, useState } from "react";
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
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { userSignUp, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [validPass, setValidPass] = useState(true);
  const [error, setError] = useState("");
  const [existedEmail, setExistedEmail] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(email, pass);

    setExistedEmail(false);
    setValidPass(true);
    if (validateEmail(email)) {
      setError("");
    } else {
      setError("Please enter a valid email address");
      return;
    }

    if (pass.length < 6) {
      setValidPass(false);
      return;
    }

    userSignUp(email, pass)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setExistedEmail(true);
        }

        console.log(error.message);
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
        Getting Started
      </h2>
      <p className="text-center text-gray-500 mb-8 font-medium">
        Create an account to continue and connect with the people.
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

        <form className="space-y-4" onSubmit={handleSignUp}>
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
          {error && <p className="text-red-700">* {error}</p>}
          {existedEmail && (
            <p className="text-red-700">* This email is already exist</p>
          )}
          <div className="relative">
            <MdPerson className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <MdLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
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
          {!validPass && (
            <p className="text-red-600">
              * Password should be at least 6 characters
            </p>
          )}

          <div className="lg:flex items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="relative w-full lg:w-1/2">
              <MdCalendarToday className="absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                id="dob"
                name="dob"
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/authentication/signIn" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
