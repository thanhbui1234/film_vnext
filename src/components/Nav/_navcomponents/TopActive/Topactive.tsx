import { IoVideocamOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Popover } from "antd";
import style from "./index.module.scss";
const content = (
  <div>
    <p>Bùi Chí Thanh</p>
  </div>
);

const Topactive = () => {
  return (
    <>
      <div className={style.topActiveContainer}>
        <Popover content={content} title="Title">
          <IoVideocamOutline
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Popover>
        <Popover content={content} title="Title">
          <FaRegBell
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Popover>
        <Popover content={content} title="Title">
          <FaUserCircle
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Popover>
      </div>
    </>
  );
};

export default Topactive;
