import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFilms } from "../../redux/filmSlice";

const Home = () => {
  const dispact = useDispatch();

  useEffect(() => {
    dispact(fetchFilms());
  });

  return <div className="w-full"></div>;
};

export default Home;
