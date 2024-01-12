import style from "./input.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoMicCircleOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import { IFilm, IState } from "../../../../common/film";
import { Link, useNavigate } from "react-router-dom";
interface IFormInput {
  search: string;
}

const InputCp = () => {
  const navigate = useNavigate();
  const films = useSelector((state: IState) => state.film.films);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [dataSearch, setData] = useState<IFilm[]>([]);
  const [dataInput, setDataInput] = useState("");
  const { register } = useForm<IFormInput>();
  const handleClickOutside = (e: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });
  const searchInput = (e: any) => {
    debonceSearch(e.target.value);
  };
  const debonceSearch = debounce((data) => {
    const dataSearchFilm = films.filter((f) => f.title?.includes(data));
    setData(dataSearchFilm);
  }, 1500);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setShow(false);
      event.preventDefault();
      navigate("/search");
      // const dataSearchFilm = films.filter((f) =>
      //   f.title?.includes(event.target.value)
      // );
    }
  };
  useEffect(() => {
    if (!dataInput) {
      setShow(false);
    }
  });

  return (
    <>
      <div ref={wrapperRef} className={style.container}>
        <form>
          <input
            {...register("search")}
            name="search"
            className={style.input}
            placeholder="Basic usage"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              // handleSearch(e);
              searchInput(e);
              setShow(true);
              setDataInput(e.target.value);
            }}
          />

          {show && (
            <div className={style.showDown}>
              {dataSearch.map((search) => {
                return (
                  <h2
                    onClick={() => setShow(false)}
                    className="px-2 my-1 hover:bg-[#F2F1EB]"
                    key={search.id}
                  >
                    <Link to={`film/${search.id}`}>{search.title}</Link>
                  </h2>
                );
              })}
            </div>
          )}

          <button type="submit">
            <p className={style.serach}>
              <CiSearch
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </p>
          </button>

          <p className={style.micro}>
            <IoMicCircleOutline
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </p>
        </form>
      </div>
      <div className="hidden"></div>
    </>
  );
};

export default InputCp;
