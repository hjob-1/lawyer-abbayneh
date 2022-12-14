import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarChart from "../../charts/BarChart";
import NavBar from "../../components/NavBar/NavBar";
import { homeVariant } from "../../utilities/animation";
import BlogersWidget from "../../widgets/bloger/BlogersWidget";
import ServiceWidget from "../../widgets/service/ServiceWidget";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoged = () => {
      const logedUser = JSON.parse(localStorage.getItem("user"));
      logedUser ? navigate("/home") : navigate("/");
    };
    isLoged();
  }, []);

  return (
    <div>
      <NavBar />
      <BlogersWidget />
      <ServiceWidget />
      <BarChart />
    </div>
  );
};

export default Home;
