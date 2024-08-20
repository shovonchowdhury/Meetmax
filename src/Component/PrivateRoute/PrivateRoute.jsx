import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);

  if (loading)
    return (
      <div className="text-center mt-64">
        {/* <span className="text-4xl">Loading...</span> */}
      </div>
    );
  if (user) return children;

  return (
    <Navigate state={location.pathname} to="/authentication/signIn"></Navigate>
  );
};

export default PrivateRoute;
