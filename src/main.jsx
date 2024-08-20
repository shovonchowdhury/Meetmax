import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp_In_Section from "./Component/SIgnUp_In_Section/SignUp_In_Section.jsx";
import SignUp from "./Component/SIgnUp_In_Section/SignUp.jsx";
import SignIn from "./Component/SIgnUp_In_Section/SignIn.jsx";
import AuthProvider from "./Component/Provider/AuthProvider.jsx";
import ForgotPass from "./Component/SIgnUp_In_Section/ForgotPass.jsx";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.jsx";
import Feed from "./Component/MainSite/Feed.jsx";
import FeedPage from "./Page/feed/FeedPage.jsx";
import CreatePostMbl from "./Component/MainSite/CreatePostMbl.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        {/* <MainSite></MainSite> */}
        <FeedPage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Feed></Feed>,
      },
      {
        path: "/createpost",
        element: <CreatePostMbl></CreatePostMbl>,
      },
    ],
  },
  {
    path: "/authentication",
    element: <SignUp_In_Section></SignUp_In_Section>,
    children: [
      {
        path: "/authentication/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/authentication/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/authentication/forgotPass",
        element: <ForgotPass></ForgotPass>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
