import { IoVideocamOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Button, Popover } from "antd";
const content = (
  <div>
    <p>Bùi Chí Thanh</p>
  </div>
);

const Topactive = () => {
  return (
    <>
      <div className="flex gap-7  text-white pt-2 cursor-pointer ">
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
