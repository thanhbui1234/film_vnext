import style from "./input.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoMicCircleOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useRef, useEffect } from "react";

interface IFormInput {
  search: string;
}

const InputCp = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => setData(data);
  const handleClickOutside = (e: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <div ref={wrapperRef} className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("search")}
            name="search"
            className={style.input}
            placeholder="Basic usage"
            onChange={() => setShow(true)}
            onClick={() => setShow(true)}
          />

          {show && (
            <div className={style.showDown}>
              asdsadasdasdsadsadasdsasdsadasdasdsadsadasds
              asdsadasdasdsadsadasds asdsadasdasdsadsadasds
              asdsadasdasdsadsadasds asdsadasdasdsadsadasds
              asdsadasdasdsadsadasds asdsadasdasdsadsadasds
            </div>
          )}

          <button>
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
    </>
  );
};

export default InputCp;
