import React from "react";
import { List, Card, Typography, Popover, notification } from "antd";
import { useFetchPopularMovies } from "@/services/api-hooks";
import MovieSearch from "../search";
import { useNavigate } from "react-router-dom";
import { PlusCircleFilled } from "@ant-design/icons";
import { addMovieNight } from "@/redux/slices/MovieNightSlice";
import { useDispatch } from "react-redux";
const { Title, Paragraph } = Typography;

export const PopularMovies: React.FC = () => {
  const { data, isLoading } = useFetchPopularMovies();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showSuccessNotification = (title: string) => {
    notification.success({
      message: "Success",
      description: `The movie "${title}" has been successfully added to the list.`,
      placement: "topRight",
      duration: 2,
    });
  };

  return (
    <>
      <MovieSearch />
      <div className="bg-[#141414]">
        <div
          className="p-1 md:px-3 md:pt-5"
          style={{
            color: "#fff",
            minHeight: "100vh",
          }}
        >
          <Title level={2} className="mb-1">
            Popular Movies
          </Title>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5,
            }}
            loading={isLoading}
            dataSource={data?.results || []}
            pagination={
              data?.results?.length
                ? { position: "bottom", align: "center" }
                : false
            }
            renderItem={(movie: any) => (
              <List.Item>
                <Card
                  hoverable
                  cover={
                    <>
                      <img
                        alt={movie?.title}
                        onClick={() => navigate(`/movies/${movie?.id}`)}
                        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                        style={{ borderRadius: "10px" }}
                      />
                    </>
                  }
                >
                  <Card.Meta
                    title={
                      <>
                        {movie?.title}
                        <span className="px-2">
                          <Popover
                            trigger="click"
                            content={
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  dispatch(addMovieNight(movie));
                                  showSuccessNotification(movie?.title);
                                }}
                              >
                                <PlusCircleFilled className="text-[12px]" />
                                <span className="px-2">
                                  Add to Movie Night List
                                </span>
                              </div>
                            }
                          >
                            <PlusCircleFilled />
                          </Popover>
                        </span>
                      </>
                    }
                    description={
                      <div onClick={() => navigate(`/movies/${movie?.id}`)}>
                        <Paragraph>
                          Release Date: {movie?.release_date}
                        </Paragraph>
                        <Paragraph>Rating: {movie?.vote_average}</Paragraph>
                        <Paragraph
                          style={{
                            maxWidth: "300px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {movie?.overview}
                        </Paragraph>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
