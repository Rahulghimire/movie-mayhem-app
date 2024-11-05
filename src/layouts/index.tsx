import { Link, Outlet } from "react-router-dom";
import { Affix, Avatar } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { AppHeader } from "@/components/appHeader";

export const Layout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="py-4 md:mx-[95px] md:px-3">
        <AppHeader />
      </header>
      <Affix
        offsetTop={0}
        className="relative z-[50]"
        children={undefined}
      ></Affix>
      <Outlet />
      {/* <Footer /> */}
      <div className="text-center py-[20px]">
        © 2024
        <Link to={"/"} className="text-[red] font-semibold mx-1">
          RAHUL GHIMIRE
        </Link>
        | All rights reserved.
      </div>
      {isVisible && (
        <div className="fixed right-2 bottom-5 z-[100]">
          <div className="flex justify-end">
            <Avatar
              size={"large"}
              className="bg-[#FF3147] cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <UpOutlined className="text-xl " />
            </Avatar>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
