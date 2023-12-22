import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Dashboard from "../Layout/Dashboard";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import Error from "../Page/Error";
import Profile from "../Dashboard/Profile";
import AllTask from "../Dashboard/AllTask";
import AddTask from "../Dashboard/AddTask";
import PrivateRouts from "../Context/PrivateRouts";
import UpdateTask from "../Dashboard/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouts>
        <Dashboard />
      </PrivateRouts>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "allTask",
        element: <AllTask />,
      },
      {
        path: "addTask",
        element: <AddTask />,
      },
      {
        path: "update/:id",
        element: <UpdateTask />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
      },
    ],
  },
]);

export default router;
