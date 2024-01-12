import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { fetchFilms } from "../../redux/filmSlice";
import CardContainer from "../../components/Film/Card";
import { AppDispatch } from "../../redux/store";
import style from "./index.module.scss";
const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <div className={style.home}>
      <CardContainer></CardContainer>;
    </div>
  );
};

export default Home;
