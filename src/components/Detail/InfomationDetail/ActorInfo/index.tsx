import { CiBellOn } from "react-icons/ci";
import { IFilm } from "../../../../common/film";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import style from "./index.module.scss";
import { FaChevronDown } from "react-icons/fa";
import useFormartNumber from "../../../../hooks/number";
type props = {
  film: IFilm;
};

const ActorInfo = (props: props) => {
  const { film } = props;

  return (
    <div className="pt-4 px-5">
      <h2 className="text-white text-2xl font-bold mb-3"> {film.title}</h2>
      <div className="flex gap-x-36">
        <div className="flex gap-6">
          <img className="object-cover" src={film.avt} width={50} alt="" />
          <span className="text-[#a8a0b0]">
            <p>{film?.username}</p>
            <p>{useFormartNumber(+film.subciriber!)} subscribers </p>
          </span>
        </div>
        <div className={style.buttonActor}>
          <button className={style.btnJoinActor}>Join</button>
          <button className={style.subcrActors}>
            <p className="mt-1 pr-2">
              <CiBellOn />
            </p>
            Subscribed
            <p className="mt-1 pl-2">
              <FaChevronDown />
            </p>
          </button>
        </div>

        <div className={style.buttonActor}>
          <button className={style.btnJoinActor}>
            <p className="flex gap-2">
              <p className="pt-1">
                <SlLike />
              </p>
              {useFormartNumber(+film.likes!)}
            </p>
          </button>
          <button className={style.btnCenter}>
            <SlDislike />
          </button>
          <button className={style.btnCenter}>
            <p className="flex gap-2">
              <p className="pt-1">
                <CiBellOn />
              </p>
              Share
            </p>
          </button>
          <button className={style.subcrActors}>...</button>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
