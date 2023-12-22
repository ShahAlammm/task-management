import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useAxiosPublic from "../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TiltCard from "./TiltCard";

const UsersCategory = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users`);
      return res.data;
    },
  });

  console.log(users);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container m-auto">
      <SectionTitle SectionTitle={"Our Users"} />
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-4"
      >
        {users?.map((user) => (
          <TiltCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersCategory;
