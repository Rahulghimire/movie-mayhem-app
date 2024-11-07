import { removeMovieNight } from "@/redux/slices/MovieNightSlice";
import { RootState } from "@/redux/Store";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Drawer, Empty } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MovieNightList: React.FC = () => {
  const movieNights = useSelector((state: RootState) => state?.movieData?.data);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleRemove = (id: string) => {
    if (id) {
      dispatch(removeMovieNight(id));
    }
  };

  return (
    <>
      <Button
        type="primary"
        iconPosition="end"
        icon={<EyeOutlined />}
        onClick={showDrawer}
      >
        View
      </Button>
      <Drawer
        title="Movie Night List"
        placement={"right"}
        width={500}
        onClose={onClose}
        open={open}
      >
        {movieNights.length > 0 ? (
          <ul className="space-y-2">
            {movieNights?.map((movie) => (
              <li
                key={movie.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{movie.title}</span>
                <Button
                  size="small"
                  danger
                  onClick={() => handleRemove(movie.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <Empty />
        )}
      </Drawer>
    </>
  );
};
