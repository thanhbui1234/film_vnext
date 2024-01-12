import { Image } from "antd";
import { IFilm } from "../../../common/film";

type props = {
  film: IFilm;
};
const DetailImage = (props: props) => {
  const { film } = props;
  return (
    <Image
      className="object-fill"
      src={film?.image} // Replace with the actual path to your image
      alt="Description of the image"
      width={"100%"}
    />
  );
};

export default DetailImage;
