import { Spin } from "antd";

export const FallBack: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#f2f2f2]">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};
