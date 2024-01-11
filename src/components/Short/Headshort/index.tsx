import React from "react";
import style from "./index.module.scss";
import { CiBellOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const HeadeShort: React.FC = () => (
  <>
    <div className={style.containerHead}>
      <img
        className={style.image}
        src={"https://i.postimg.cc/nhckjJqP/2.png"}
        alt="Logo"
      />

      <div className={style.user}>
        <img
          className="object-contain"
          width={60}
          src={"https://i.postimg.cc/zv4rLjcd/22.png"}
          alt="Logo"
        />
        <span>
          <h2 className="text-3xl text-white">GeishaGodness</h2>
          <p className={style.info}>
            <p>@GeishaGodness</p>
            <p>199k Subscriptions</p>
          </p>
        </span>
      </div>
      <div className={style.buttonHead}>
        <button className={style.btnJoin}>Join</button>
        <button className={style.subcr}>
          <p className="mt-1 pr-2">
            <CiBellOn />
          </p>
          Subscribed
          <p className="mt-1 pr-2">
            <FaChevronDown />
          </p>
        </button>
      </div>
    </div>
  </>
);

export default HeadeShort;
