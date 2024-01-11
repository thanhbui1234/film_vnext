import { FaPlay } from "react-icons/fa";
import { IFilm } from "../../../common/film";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
interface props {
  films: IFilm[];
}

const VideoShort = (props: props) => {
  const { films } = props;
  return (
    <>
      <div className={""}>
        <div className="border-t border-[#4b347c] mt-5 mb-4 mx-6"></div>
        <p className="flex gap-5 text-white mx-6">
          <h2>Videos</h2>
          <button className="mt-1">
            <FaPlay />
          </button>
          <p>Play all</p>
        </p>
        <div className={style.cardVideoContainer}>
          <div className={style.cardVideo}>
            {films.map((f) => {
              return (
                <div className={style.childCardContetn} key={f.id}>
                  <Link to={`/film/${f.id}`}>
                    <img className="rounded-t-lg" src={f.image} alt="Logo" />
                    <div className={style.contentCard}>
                      <h3>{f.title}</h3>
                      <span className={style.view}>{f.view}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoShort;
