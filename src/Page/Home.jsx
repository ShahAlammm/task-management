import Banner from "../Components/Banner";
import NumberCount from "../Components/NumberCount";
import Testimonials from "../Components/Testimonials";
import UsersCategory from "../Components/UsersCategory";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <UsersCategory />
      <NumberCount />
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Home;
