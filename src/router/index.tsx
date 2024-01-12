import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Contetn from "../layout/Contetn";
import Notfound from "../pages/Notfound/Notfound";
import DetailFilm from "../pages/Details";
import Search from "../pages/Search";
import Short from "../pages/Short";
import Home from "../pages/Home";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Contetn />}>
            <Route index element={<Home></Home>} />
            <Route path="/short" element={<Short></Short>} />
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
