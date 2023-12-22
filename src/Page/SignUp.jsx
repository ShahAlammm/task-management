import { Link, useNavigate } from "react-router-dom";
import img from "../assets/image/authentication.gif";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hook/useAxiosPublic";
import useAuth from "../hook/useAuth";
import SocialLogin from "../Components/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(() => {
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
          };
          axiosPublic.post("/newUser", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-start",
                icon: "success",
                title: "Sign Up successfully",
                showConfirmButton: false,
                timer: 2000,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="shadow-2xl p-10 bg-cyan-100 rounded-2xl">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm font-semibold">
              <h1 className="text-5xl text-center p-3 font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-600">Name is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL?.type === "required" && (
                    <p className="text-red-600">Photo URL is required</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">Email is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register(
                      "password",

                      {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      }
                    )}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 8 character{" "}
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 character{" "}
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Must have one uppercase letter, one lowercase letter, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control mt-5">
                  <input
                    //   disabled={"disabled"}
                    type="submit"
                    value="Sign in"
                    className="btn border-none bg-[#26DEBE] text-white"
                  />
                </div>
              </form>
              <p className="text-center text-blue-600 font-bold">
                <Link to={"/login"}>Already registered? Go to log in</Link>
              </p>
              <p className="text-center font-semibold">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
