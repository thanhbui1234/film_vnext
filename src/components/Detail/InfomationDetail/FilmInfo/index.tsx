import { IFilm } from "../../../../common/film";
import useFormartNumber from "../../../../hooks/number";
import style from "./index.module.scss";
interface props {
  film: IFilm;
}

const Filminfo = (props: props) => {
  const { film } = props;
  return (
    <>
      <div className={style.filmInfo}>
        <p className="flex gap-5">
          <p>{useFormartNumber(film.view!)}</p>
          <p>{film.datetime}</p>
        </p>
        <p>{film.description}</p>
        <button className="text-white">Show more</button>
      </div>
    </>
  );
};

export default Filminfo;
