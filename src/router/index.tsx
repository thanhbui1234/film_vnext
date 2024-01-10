import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contetn from "../layout/Contetn";
import Notfound from "../pages/Notfound/Notfound";
import DetailFilm from "../pages/Details";
import Search from "../pages/Search";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Contetn />}>
            <Route index element={<Home></Home>} />
            <Route path="/search" element={<Search />}></Route>
            <Route path="*" element={<Notfound />} />
          </Route>
          <Route path="/film/:id" element={<DetailFilm />}>
            <Route path="*" element={<Notfound />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
