import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const LoadingDetail = () => {
  return (
    <Spin
      className="flex justify-center mt-[300px] "
      indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
    />
  );
};

export default LoadingDetail;
