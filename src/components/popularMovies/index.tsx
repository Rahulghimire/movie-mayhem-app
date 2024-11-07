import React from "react";
import { List, Card, Typography } from "antd";
import { useFetchPopularMovies } from "@/services/api-hooks";
import MovieSearch from "../search";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

export const PopularMovies: React.FC = () => {
  const { data, isLoading } = useFetchPopularMovies();

  const navigate = useNavigate();

  return (
    <>
      <MovieSearch />
      <div className="bg-[#141414]">
        <div
          className="m-1 md:mx-3 md:mt-5"
          style={{
            color: "#fff",
            minHeight: "100vh",
            padding: "20px 0",
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
            pagination={{ position: "bottom", align: "center" }}
            renderItem={(movie: any) => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() => navigate(`/movies/${movie?.id}`)}
                  cover={
                    <img
                      alt={movie?.title}
                      src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Card.Meta
                    title={movie?.title}
                    description={
                      <>
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
                      </>
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
