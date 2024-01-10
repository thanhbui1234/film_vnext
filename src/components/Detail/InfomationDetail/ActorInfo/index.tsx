import { CiBellOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IFilm } from "../../../../common/film";
import numeral from "numeral";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import style from "./Actor.module.scss";
type props = {
  film: IFilm;
};

const ActorInfo = (props: props) => {
  const { film } = props;
  const formattedSubciriber = numeral(film.subciriber).format("0a");

  return (
    <div className="pt-4 px-5">
      <h2 className="text-white text-2xl font-bold mb-3"> {film.title}</h2>
      <div className="flex gap-10">
        <div className="flex gap-6">
          <img className="object-cover" src={film.avt} width={50} alt="" />
          <span className="text-[#a8a0b0]">
            <p>{film?.username}</p>
            <p>{formattedSubciriber} subscribers </p>
          </span>
        </div>
        <div className={style.register}>
          <button className="">JOIN</button>
          <button className="flex">
            <CiBellOn />
            subscriber
            <FaAngleDown />
          </button>
        </div>

        <div className="text-[#a8a0b0] flex ">
          <button className="flex">
            <SlLike />
            {film.likes}
          </button>
          <button>
            <SlDislike />
          </button>
          <button>
            <CiBellOn />
            Share
          </button>
          <button>...</button>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
