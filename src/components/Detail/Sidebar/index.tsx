import { Image } from "antd";
import { IFilm } from "../../../common/film";
import style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
type Props = {
  films: IFilm[];
};

const SibarDetail = (props: Props) => {
  const { films } = props;

  return (
    <div className={style.sidebar}>
      {films.map((film: IFilm, index) => {
        return (
          <div key={index + 1} className="flex">
            <Image
              className="object-cover rounded-l-lg"
              width={199}
              height={96}
              src={film.image}
            />
            <Link to={`/film/${film.id}`} className={style.text}>
              <div className="px-3">
                <h3 className=" text-ellipsis overflow-hidden text-white font-bold  text-[15px] ">
                  {film.title}
                </h3>
                <p className="text-[#a8a0b0]">{film.username}</p>
                <span className="text-[#a8a0b0]">14kview - 1 month ago</span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SibarDetail;
