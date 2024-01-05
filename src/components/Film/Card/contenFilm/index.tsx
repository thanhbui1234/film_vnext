import style from "./conten.module.scss";
import numeral from "numeral";
type Props = {
  avt: string;
  title: string;
  username: string;
  view: number;
  datetime: string;
};
const ContenFilm: React.FC<Props> = (props: Props) => {
  const { avt, title, username, view, datetime } = props;
  const formattedView = numeral(view).format("0a");

  return (
    <>
      <div className={style.contaienr}>
        <img className="w-10 h-10 bg-inherit border-none" src={avt} alt="" />
        <div className="flex flex-col gap-3">
          <p className={style.title}>{title}</p>
          <p className={style.username}>{username}</p>
          <span className={style.viewDate}>
            {`${formattedView} view`} - {datetime}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContenFilm;
