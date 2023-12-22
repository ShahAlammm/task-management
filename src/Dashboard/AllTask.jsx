import Cart from "../Components/Cart";
import useCart from "../hook/useCart";

const AllTask = () => {
  const [tasks, refetch] = useCart([]);


  // Function to format the deadlineDate
  const formatDeadlineDate = (deadlineDate) => {
    return new Date(deadlineDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to sort tasks by formattedDeadlineDate
  const sortByFormattedDeadlineDate = (a, b) => {
    const formattedDateA = formatDeadlineDate(a.deadlineDate);
    const formattedDateB = formatDeadlineDate(b.deadlineDate);

    return formattedDateA.localeCompare(formattedDateB);
  };

  const todoTasks = tasks
    .filter((task) => task.status === "toDo")
    .sort(sortByFormattedDeadlineDate);

  const workingTasks = tasks
    .filter((task) => task.status === "working")
    .sort(sortByFormattedDeadlineDate);

  const doneTasks = tasks
    .filter((task) => task.status === "done")
    .sort(sortByFormattedDeadlineDate);

  return (
    <div className="grid md:grid-cols-3 h-screen">
      <div className="bg-red-300">
        <h3 className="text-center md:text-lg font-semibold md:font-bold m-5 text-slate-700">
          To Do
        </h3>
        <div className="divider divider-neutral" />
        <div className="grid gap-y-2 justify-center items-center px-2">
          {todoTasks.map((task) => (
            <Cart
              key={task._id}
              taskTitle={task.taskTitle}
              deadlineDate={task.deadlineDate}
              taskDetails={task.taskDetails}
              id={task._id}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
      <div className="bg-blue-300">
        <h3 className="text-center md:text-lg font-semibold md:font-bold m-5 text-slate-700">
          Working
        </h3>
        <div className="divider divider-neutral" />
        <div className="grid gap-y-2 justify-center items-center px-2">
          {workingTasks.map((task) => (
            <Cart
              key={task._id}
              taskTitle={task.taskTitle}
              deadlineDate={task.deadlineDate}
              taskDetails={task.taskDetails}
              id={task._id}
            />

          ))}
        </div>
      </div>
      <div className="bg-green-300">
        <h3 className="text-center md:text-lg font-semibold md:font-bold m-5 text-slate-700">
          Task Done
        </h3>
        <div className="divider divider-neutral" />
        <div className="grid gap-y-2 justify-center items-center px-2">
          {doneTasks.map((task) => (
            <Cart
              key={task._id}
              taskTitle={task.taskTitle}
              deadlineDate={task.deadlineDate}
              taskDetails={task.taskDetails}
              id={task._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
