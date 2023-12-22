import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import useAxiosPublic from "../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
  const items = useLoaderData();
  console.log(items);

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { handleSubmit, setValue, register, reset } = useForm();

  const onSubmit = async (data) => {
    data.status = "toDo";
    const updateTask = {
      taskTitle: data.taskTitle,
      deadlineDate: data.deadlineDate,
      taskDetails: data.taskDetails,
      status: data.status,
    };

    const res = await axiosPublic.patch(`/tasks/${items._id}`, updateTask);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      // show success
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Parcel is updated`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset("");
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
              defaultValue={items.taskTitle}
              name="taskTitle"
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
              defaultValue={items.deadlineDate}
              name="deadlineDate"
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
            defaultValue={items.taskDetails}
            name="taskDetails"
          />
        </div>

        <button type="submit" className="btn btn-accent uppercase mt-10">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
