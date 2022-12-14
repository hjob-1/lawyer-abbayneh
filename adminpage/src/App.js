import { useLocation } from "react-router-dom";
import "./App.css";
import BarChart from "./charts/BarChart";
import CopyRight from "./components/CopyRight";
import Routers from "./navigations/Routers";
import BlogerDetail from "./pages/bloger/BlogerDetail";
import BlogerScreen from "./pages/bloger/BlogerScreen";
import Login from "./pages/login/Login";
import BlogersWidget from "./widgets/bloger/BlogersWidget";
import ServiceWidget from "./widgets/service/ServiceWidget";

function App() {
  return (
    <div className="App">
      <Routers />
      {/* <CopyRight /> */}
    </div>
  );
}

export default App;
