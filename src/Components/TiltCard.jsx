import { Tilt } from "react-tilt";
import img from "../assets/image/verify.png";
const TiltCard = ({ user }) => {
  const { description, title, image } = user || {};
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-96 h-96 rounded-2xl">
        <Tilt>
          <div className="relative w-full h-[230px] rounded-2xl">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 space-x-1">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={img} alt="link" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2"></div>
        </Tilt>
      </div>
    </div>
  );
};

export default TiltCard;
