import { IFilm } from "../../../common/film";
import ActorInfo from "./ActorInfo";
import Filminfo from "./FilmInfo";
import style from "./index.module.scss";
interface props {
  film: IFilm;
}

const Infomation = (props: props) => {
  const { film } = props;
  console.log(film);

  return (
    <div className={style.container}>
      <ActorInfo film={film}></ActorInfo>
      <div className="border-t border-[#4b347c] mt-5 mb-4 mx-6"></div>
      <Filminfo film={film}></Filminfo>
    </div>
  );
};

export default Infomation;
