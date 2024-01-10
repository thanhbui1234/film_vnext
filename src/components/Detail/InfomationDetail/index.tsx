import { IFilm } from "../../../common/film";
import ActorInfo from "./ActorInfo";
import Filminfo from "./FilmInfo";
import style from "./Infomation.module.scss";
type props = {
  film: IFilm;
};

const Infomation = (props: props) => {
  const { film } = props;
  console.log(film);

  return (
    <div className={style.container}>
      <ActorInfo film={film}></ActorInfo>
      <Filminfo></Filminfo>
    </div>
  );
};

export default Infomation;
