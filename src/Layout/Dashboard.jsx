import { NavLink, Outlet } from "react-router-dom";
import {
  FaClipboard,
  FaHome,
  FaListUl,
  FaUserAlt,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="container m-auto">
      <div
        style={{ backgroundImage: "url(https://i.ibb.co/J2q5qBj/img4.jpg)" }}
        className="w-full bg-cover"
      >
        <h1 className="md:text-3xl p-14 uppercase text-center text-black font-serif font-bold">
          My Activities
        </h1>
        <ul className="flex flex-row justify-around  menu md:text-lg font-serif uppercase  ">
          <li className="text-black">
            <NavLink to="/dashboard/profile">
              <FaUserAlt className="md:w-7 md:h-10"></FaUserAlt>Profile
            </NavLink>
          </li>

          <li className="text-black">
            <NavLink to="/dashboard/allTask">
              <FaListUl className="md:w-7 md:h-10"></FaListUl>All Task
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/dashboard/addTask">
              <FaClipboard className="md:w-7 md:h-10"></FaClipboard>Add New Task
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/">
              <FaHome className="md:w-7 md:h-10 text-red-500"></FaHome>Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className="divider divider-info"></div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
