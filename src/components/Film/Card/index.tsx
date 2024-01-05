import Imagefilm from "./image";
import style from "./Card.module.scss";
import ContenFilm from "./contenFilm";
import { useSelector } from "react-redux";
import { IFilm, IState } from "../../../common/film";
import Loading from "../../Loading/home/Loading";
import { Link } from "react-router-dom";
const CardContainer = () => {
  const films = useSelector((state: IState) => state.film.films);
  const loading = useSelector((state: IState) => state.film.isLoading);

  if (loading === "pending") {
    return <Loading></Loading>;
  }

  return (
    <div className={style.container}>
      {films.map((film: IFilm, index: number) => {
        return (
          <div key={index + 1} className={style.card}>
            <Link to={`film/${film.id}`}>
              <Imagefilm
                w={376}
                h={209}
                url={film.image as string}
                time={film.timevideo as string}
              />
              <ContenFilm
                avt={film.avt!}
                title={film.title!}
                username={film.username!}
                view={film.view!}
                datetime="024-01-04T12:30:00Z"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
