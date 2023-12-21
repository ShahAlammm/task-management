import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartPie,
  FaClipboardCheck,
  FaEnvelope,
  FaHome,
  FaListAlt,
  FaListUl,
  FaStar,
  FaUserAlt,
  FaUsers,
  FaWalking,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="container m-auto">
      <div
        style={{ backgroundImage: "url(https://i.ibb.co/J2q5qBj/img4.jpg)" }}
        className="w-full bg-cover"
      >
        <h1 className="md:text-3xl pt-14 uppercase md:p-5 text-center text-black font-serif font-bold">
          Your Activities
        </h1>
        <ul className="flex flex-row justify-around  menu md:text-lg font-serif uppercase md:mt-16 ">
          <li className="text-black">
            <NavLink to="/dashboard/statistics">
              <FaUserAlt className="md:w-7 md:h-10"></FaUserAlt>Profile
            </NavLink>
          </li>

          <li className="text-black">
            <NavLink to="/dashboard/allParcels">
              <FaListUl className="md:w-7 md:h-10"></FaListUl>All Task
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/dashboard/deliveryMan">
              <FaWalking className="md:w-7 md:h-10"></FaWalking>Add New Task
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10 bg-cover bg-opacity-80">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
