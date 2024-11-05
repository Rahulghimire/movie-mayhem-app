import React from "react";
import { List, Card, Typography } from "antd";
import { useFetchPopularMovies } from "@/services/api-hooks";
import MovieSearch from "../search";

const { Title, Paragraph } = Typography;

export const PopularMovies: React.FC = () => {
  const { data, isLoading } = useFetchPopularMovies();

  return (
    <>
      <div>
        <MovieSearch />
      </div>
      <div>
        <Title level={2} style={{ color: "#292561" }}>
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
          dataSource={data?.results}
          pagination={{ position: "bottom", align: "center" }}
          renderItem={(movie: any) => (
            <List.Item>
              <Card
                hoverable
                cover={
                  <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    style={{ borderRadius: "10px" }}
                  />
                }
              >
                <Card.Meta
                  title={movie.title}
                  description={
                    <>
                      <Paragraph>Release Date: {movie.release_date}</Paragraph>
                      <Paragraph>Rating: {movie.vote_average}</Paragraph>
                      <Paragraph
                        style={{
                          maxWidth: "300px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {movie.overview}
                      </Paragraph>
                    </>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default PopularMovies;
