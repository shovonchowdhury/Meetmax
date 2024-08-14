import React from "react";
import Header_SignUp from "../LogInComponent/Header/Header_SignUp";
import { Outlet } from "react-router-dom";

const SignUp_In_Section = () => {
  return (
    <div className="font-roboto p-6">
      <Header_SignUp></Header_SignUp>
      <Outlet></Outlet>
    </div>
  );
};

export default SignUp_In_Section;
