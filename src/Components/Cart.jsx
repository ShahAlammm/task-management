/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";
import Swal from "sweetalert2";

const Cart = ({ id, taskTitle, deadlineDate, taskDetails, refetch }) => {

  const axiosPublic = useAxiosPublic();


  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/tasks/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Task has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="card xl:w-96 glass shadow-2xl shadow-black text-slate-700">
        <div className="card-body">
          <h2 className="card-title font-bold">Task Name: {taskTitle}</h2>
          <p className="text-lg font-semibold">Dateline: {deadlineDate}</p>
          <p>Details: {taskDetails}</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical lg:join-horizontal ">
              <button
                onClick={() => handleDeleteItem(id)}
                className="btn join-item bg-red-500 text-white"
              >
                Delete
              </button>
              <Link to={`/dashboard/update/${id}`}>
                <button className="btn join-item bg-yellow-300">Edit</button>
              </Link>
              {/* <button className="btn join-item text-white"></button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
