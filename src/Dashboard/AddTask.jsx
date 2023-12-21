import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hook/useAxiosPublic";

const AddTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { handleSubmit, register, reset } = useForm();
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);

  const onSubmit = async (data) => {
    data.status = "toDo";
    data.bookingDate = currentDate;

    console.log("Form submitted:", data);
    const res = await axiosPublic.post("/bookings", data);

    if (res.data.acknowledged === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Booking successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  return (
    <div className="p-10">
      <form
        className="card-body glass rounded-2xl shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lg:flex gap-10">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-semibold">Name:</span>
            </label>
            <input
              {...register("userName")}
              className="input input-bordered font-semibold"
              value={user.displayName}
              readOnly
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email:</span>
            </label>
            <input
              {...register("gmail")}
              className="input input-bordered font-semibold"
              value={user.email}
              readOnly
            />
          </div>
        </div>

        <div className="lg:flex gap-10">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Task Title:
              </span>
            </label>
            <input
              {...register("taskTitle")}
              className="input input-bordered"
              placeholder="Task Title"
            />
          </div>

          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Deadline Date:
              </span>
            </label>
            <input
              type="date"
              {...register("deadlineDate")}
              className="input input-bordered"
              placeholder="Details"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Task Details:
            </span>
          </label>
          <textarea
            {...register("taskDetails")}
            className="input input-bordered h-36"
          />
        </div>

        <button type="submit" className="btn btn-accent uppercase mt-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
