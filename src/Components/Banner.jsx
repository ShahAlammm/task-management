import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "../assets/image/banner-task.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
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
    <div className="pt-20">
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="">
          <div>
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 mt-24 lg:mt-16 xl:mt-0">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-center lg:text-left space-y-6 glass p-10 rounded-2xl shadow-2xl"
              >
                <div className="space-y-5 z-40">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-2xl font-serif text-orange-500"
                  >
                    SCC Technovision Inc.
                  </p>
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="text-5xl lg:text-7xl font-semibold text-sky-500 font-serif"
                  >
                    Manage Your Task Here
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="1700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    perferendis neque ipsam sapiente. Tenetur iure velit
                    laboriosam assumenda id a dolorum? Quidem autem minima
                    provident atque qui dolorem magni hic.
                  </p>
                  <div className="flex justify-end ">
                    <Link to={'/dashboard'}>
                      <button className="btn btn-accent font-semibold">
                        Let's Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card w-full max-w-xl  ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="col-span-4"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
