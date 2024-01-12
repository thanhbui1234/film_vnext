import React from "react";
// import { LoadingOutlined } from "@ant-design/icons";
// import { Spin } from "antd";
import { Skeleton } from "antd";
import style from "./Loadinghome.module.scss";
const Loading: React.FC = () => (
  // <Spin
  //   className="flex justify-center mt-[300px] "
  //   indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
  // />
  <>
    <div className={style.contaienr}>
      <div className=" w-[376px] max-w-[376px]">
        <div className={style.image}></div>
        <div className={style.content}>
          <Skeleton />
        </div>
      </div>
      <div className=" w-[376px] max-w-[376px]">
        <div className={style.image}></div>
        <div className={style.content}>
          <Skeleton />
        </div>
      </div>{" "}
      <div className=" w-[376px] max-w-[376px]">
        <div className={style.image}></div>
        <div className={style.content}>
          <Skeleton />
        </div>
      </div>{" "}
      <div className=" w-[376px] max-w-[376px]">
        <div className={style.image}></div>
        <div className={style.content}>
          <Skeleton />
        </div>
      </div>{" "}
      <div className=" w-[376px] max-w-[376px]">
        <div className={style.image}></div>
        <div className={style.content}>
          <Skeleton />
        </div>
      </div>{" "}
      <div className=" w-[376px] max-w-[376px]">
        <div className={style.image}></div>
        <div className={style.content}>
          <Skeleton />
        </div>
      </div>
    </div>
  </>
);

export default Loading;
