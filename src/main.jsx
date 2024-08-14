import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInComponent from "./Component/LogInComponent/LogInComponent.jsx";
import SignUp_In_Section from "./Component/SIgnUp_In_Section/SignUp_In_Section.jsx";
import SignUp from "./Component/SIgnUp_In_Section/SignUp.jsx";
import SignIn from "./Component/SIgnUp_In_Section/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp_In_Section></SignUp_In_Section>,
    children: [
      {
        path: "/",
        element: <SignUp></SignUp>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
