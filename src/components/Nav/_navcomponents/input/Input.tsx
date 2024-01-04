import React from "react";
import { Input } from "antd";
import style from "./input.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoMicCircleOutline } from "react-icons/io5";

const InputCp: React.FC = () => (
  <>
    <div className={style.container}>
      <Input className={style.input} placeholder="Basic usage" />
      <p className={style.serach}>
        <CiSearch
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </p>
      <p className={style.micro}>
        <IoMicCircleOutline
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </p>
    </div>
  </>
);

export default InputCp;
