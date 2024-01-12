import { IoHomeOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaChalkboardUser } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";

import style from "./index.module.scss";
const MenuShort = () => {
  return (
    <>
      <div className="flex mt-5 ">
        <div className="w-[90%] flex gap-5 px-5">
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <IoHomeOutline />
            </p>
            Home
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <GoVideo />
            </p>
            Video
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <GoVideo />
            </p>
            Shorts
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <RiLiveLine />
            </p>
            Live
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <MdOutlinePlaylistPlay />
            </p>
            Playlists
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <GoPeople />
            </p>
            Community
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <FaChalkboardUser />
            </p>
            Channels
          </button>
          <button className={style.btnMenuShort}>
            <p className="pt-1 pr-4">
              <SiAboutdotme />
            </p>
            About
          </button>
        </div>
        <div className="w-[10%] text-white">
          <button className="pt-3">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="border-t border-[#4b347c] mb-4 mx-6"></div>
    </>
  );
};

export default MenuShort;
