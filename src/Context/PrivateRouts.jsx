import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRouts;
