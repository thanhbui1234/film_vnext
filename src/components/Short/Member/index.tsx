import style from "./index.module.scss";
import { IFilm, IState } from "../../../common/film";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { Link } from "react-router-dom";

interface props {
  films: IFilm[];
}
function Member(props: props) {
  const { films } = props;
  const loading = useSelector((state: IState) => state.film.isLoading);

  return (
    <div className="flex justify-between mx-6 mt-8">
      <span className="flex flex-col">
        <h2 className="text-white text-2xl">Our members</h2>
        <p className={style.textMember}>Thank you channel members</p>
      </span>

      {loading === "pending" ? (
        <Spin className="mr-[300px] mt-10" />
      ) : (
        <div className={style.avtMenu}>
          <div className={style.contetnAvt}>
            {films.map((member) => {
              return (
                <img className="mr-3" width={50} src={member.avt} alt="Logo" />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Member;
