import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
// import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Testimonials = () => {
//   const [reviews, setReview] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/reviews")
//       .then((res) => res.json())
//       .then((data) => setReview(data));
//   }, []);

const axiosPublic = useAxiosPublic();

const { data: reviews = [] } = useQuery({
    queryKey: ['reviews'],
    queryFn: async() => {
        const res = await axiosPublic.get(`/reviews`);
        return res.data;
    }
})

  return (
   <div className="container m-auto">
     <div className="lg:mt-24 my-20">
      <SectionTitle SectionTitle={"Our Reviews"}></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center flex flex-col m-24 items-center space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
   </div>
  );
};

export default Testimonials;
