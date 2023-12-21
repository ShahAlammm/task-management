import useAuth from "../hook/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="container m-auto h-screen">
      <div className="flex justify-center items-center">
        <div className="avatar mt-10">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 gap-4">
        <h1 className="text-4xl">Name: {user?.displayName}</h1>
        <h1 className="text-4xl">Email: {user?.email}</h1>
      </div>
    </div>
  );
};

export default Profile;
