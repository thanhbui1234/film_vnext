import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmById, fetchFilms } from "../../redux/filmSlice";
import LoadingDetail from "../../components/Loading/detail/LoadingDetail";
import { IState } from "../../common/film";
import { AppDispatch } from "../../redux/store";
import DetailImage from "../../components/Detail/DetailImage";
import Infomation from "../../components/Detail/InfomationDetail";
import SibarDetail from "../../components/Detail/Sidebar";

const DetailFilm = () => {
  const { id } = useParams();
  const dispact = useDispatch<AppDispatch>();
  const loading = useSelector((state: IState) => state.film.isLoading);
  const films = useSelector((state: IState) => state.film.films);
  const film = useSelector((state: IState) => state.film.film);
  const filterFilm = films.filter((film) => film.id != +id!);

  useEffect(() => {
    dispact(fetchFilmById(+id! as number));
    dispact(fetchFilms());
  }, [id]);
  if (loading === "pending") return <LoadingDetail></LoadingDetail>;
  return (
    <div className="mx-5 flex flex-row">
      <div className="w-[70%]">
        <DetailImage film={film}></DetailImage>
        <Infomation film={film}></Infomation>
      </div>
      <div className="w-[30%]">
        <SibarDetail films={filterFilm} />
      </div>
    </div>
  );
};

export default DetailFilm;
