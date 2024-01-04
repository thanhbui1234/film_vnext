import InputCp from "./_navcomponents/input/Input";
import Menu from "./_navcomponents/Menu/Menu";
import Topactive from "./_navcomponents/TopActive/Topactive";

const Navbar = () => {
  return (
    <>
      <div className="flex  justify-center items-center  relative ">
        <InputCp />
        <p className="absolute right-7">
          <Topactive></Topactive>
        </p>

        {/* <div className="relative ">
          <Menu></Menu>
        </div> */}
      </div>
      <div className="flex justify-end mt-7">
        <Menu></Menu>
      </div>
      <div className="border-t border-[#4b347c] my-4"></div>
    </>
  );
};

export default Navbar;
