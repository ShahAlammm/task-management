import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ SectionTitle }) => {
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
    <div className="container m-auto my-16 md:my-24">
      <div className="divider divider-accent font-bold w-1/3 m-auto"></div>
      <div className="divider divider-accent font-bold w-2/3 m-auto"></div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="divider divider-accent font-bold uppercase text-4xl"
      >
        {SectionTitle}
      </div>
      <div className="divider divider-accent font-bold w-2/3 m-auto"></div>
      <div className="divider divider-accent font-bold w-1/3 m-auto"></div>
    </div>
  );
};

export default SectionTitle;
