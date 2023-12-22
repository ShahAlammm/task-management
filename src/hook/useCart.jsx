import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: task = [],
    error,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/tasks?email=${user.email}`);

        return res.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error; // Rethrow the error to let React Query handle it
      }
    },
  });

  return [task, refetch];
};

export default useCart;
