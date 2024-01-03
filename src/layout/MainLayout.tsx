import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={style.container}>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
