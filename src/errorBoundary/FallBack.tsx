import { Spin } from "antd";

export const FallBack: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#FF3147]">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};
