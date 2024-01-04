import { IoVideocamOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Topactive = () => {
  return (
    <>
      <div className="flex gap-7  text-white pt-2 ">
        <IoVideocamOutline
          style={{
            width: "24px",
            height: "24px",
          }}
        />
        <FaRegBell
          style={{
            width: "24px",
            height: "24px",
          }}
        />
        <FaUserCircle
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </div>
    </>
  );
};

export default Topactive;
