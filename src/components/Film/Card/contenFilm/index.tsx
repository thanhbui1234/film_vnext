import useFormartNumber from "../../../../hooks/number";
import style from "./conten.module.scss";
type Props = {
  avt: string;
  title: string;
  username: string;
  view: number;
  datetime: string;
};
const ContenFilm: React.FC<Props> = (props: Props) => {
  const { avt, title, username, view, datetime } = props;

  return (
    <>
      <div className={style.contaienr}>
        <img className="w-10 h-10 bg-inherit border-none" src={avt} alt="" />
        <div className="flex flex-col gap-3">
          <p className={style.title}>{title}</p>
          <p className={style.username}>{username}</p>
          <span className={style.viewDate}>
            {`${useFormartNumber(view)} view`} - {datetime}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContenFilm;
