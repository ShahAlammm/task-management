import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://parcel-management-server-two.vercel.app",
  });
  return axiosPublic;
};

export default useAxiosPublic;
