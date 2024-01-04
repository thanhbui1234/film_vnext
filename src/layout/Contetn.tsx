import Sidebar from "../components/Sidebar";
import { Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const Contetn = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <Sidebar></Sidebar>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Contetn;
