import { useDispatch, useSelector } from "react-redux";
import Headshort from "../../components/Short/Headshort";
import Member from "../../components/Short/Member";
import MenuShort from "../../components/Short/MenuShort";
import style from "./index.module.scss";
import { useEffect } from "react";
import { fetchFilms } from "../../redux/filmSlice";
import { AppDispatch } from "../../redux/store";
import { IState } from "../../common/film";
import VideoShort from "../../components/Short/Videos";
const Short = () => {
  const dispatch = useDispatch<AppDispatch>();
  const films = useSelector((state: IState) => state.film.films);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <>
      <div className={style.containerShort}>
        <Headshort></Headshort>
        <MenuShort></MenuShort>
        <Member films={films}></Member>
        <VideoShort films={films}></VideoShort>
      </div>
    </>
  );
};

export default Short;
