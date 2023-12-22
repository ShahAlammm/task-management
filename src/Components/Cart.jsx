const Cart = ({ taskTitle, deadlineDate, taskDetails }) => {
  return (
    <div>
      <div className="card w-96 glass shadow-2xl shadow-black text-slate-700">
        <div className="card-body">
          <h2 className="card-title font-bold">Task Name: {taskTitle}</h2>
          <p className="text-lg font-semibold">Dateline: {deadlineDate}</p>
          <div className="card-actions justify-start">
            <p>Details: {taskDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
