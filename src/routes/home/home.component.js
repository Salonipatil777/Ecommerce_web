import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/Directory.component";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
      <Footer/>

    </div>
  );
};

export default Home;
