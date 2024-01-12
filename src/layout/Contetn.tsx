import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Contetn = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <Sidebar></Sidebar>
          <div className="w-[100%]">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contetn;
