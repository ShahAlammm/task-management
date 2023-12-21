import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const MainLayout = () => {
  const location = useLocation();
  const logIn = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {logIn || <NavBar></NavBar>}
      <Outlet />
    </div>
  );
};

export default MainLayout;
