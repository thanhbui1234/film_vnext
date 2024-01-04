import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import Navbar from "../components/Nav";
const MainLayout = () => {
  return (
    <div className={style.container}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
