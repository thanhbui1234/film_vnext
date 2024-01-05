import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmById } from "../../redux/filmSlice";
import LoadingDetail from "../../components/Loading/detail/LoadingDetail";
import { IState } from "../../common/film";
import { AppDispatch } from "../../redux/store";

const DetailFilm = () => {
  const { id } = useParams();
  const dispact = useDispatch<AppDispatch>();
  const loading = useSelector((state: IState) => state.film.isLoading);
  useEffect(() => {
    dispact(fetchFilmById(+id! as number));
  }, [id]);
  if (loading === "pending") return <LoadingDetail></LoadingDetail>;
  return <div className="flex"></div>;
};

export default DetailFilm;
