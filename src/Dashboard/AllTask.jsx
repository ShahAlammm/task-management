const AllTask = () => {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="bg-red-300">
        <h3 className="text-center text-lg font-bold m-5">To Do :</h3>
        <div className="divider divider-neutral"></div>
      </div>
      <div className="bg-blue-300">
      <h3 className="text-center text-lg font-bold m-5">Working :</h3>
      <div className="divider divider-neutral"></div>
      </div>
      <div className="bg-green-300">
      <h3 className="text-center text-lg font-bold m-5">Task Done :</h3>
      <div className="divider divider-neutral"></div>
      </div>
    </div>
  );
};

export default AllTask;
