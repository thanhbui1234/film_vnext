import React from "react";
type Props = {
  w: number;
  h: number;
  url: string;
  time: string;
};
import style from "./image.module.scss";
const Imagefilm: React.FC<Props> = (props: Props) => {
  const { w, h, url, time } = props;
  return (
    <>
      <div className={style.container}>
        <img
          className={style.image}
          src={url} // Replace with the actual path to your image
          alt="Description of the image"
          height={h}
        />
        <span className={style.time}>{time}</span>
      </div>
    </>
  );
};

export default Imagefilm;
