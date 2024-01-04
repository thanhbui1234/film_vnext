import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Nav";

const MainLayout = () => {
  return (
    <div className={style.container}>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
