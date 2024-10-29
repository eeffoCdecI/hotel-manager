import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default App;
