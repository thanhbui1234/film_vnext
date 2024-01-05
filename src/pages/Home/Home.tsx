import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { fetchFilms } from "../../redux/filmSlice";
import CardContainer from "../../components/Film/Card";
import { AppDispatch } from "../../redux/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <div className="w-[1264px] pl-14 pr-12 bg-[#282c4c] ">
      <CardContainer></CardContainer>;
    </div>
  );
};

export default Home;
