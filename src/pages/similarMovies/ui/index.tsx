import { Card, List } from "antd";
import { useFetchSimilarMovies } from "@/services/api-hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieImage } from "./MovieImage";
import { MovieDetails } from "./MovieDetails";
import { GenreTags } from "./GenericTags";

export const SimilarMovies: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const { mutate, data, isPending } = useFetchSimilarMovies();

  useEffect(() => {
    if (id) {
      mutate(id);
    }
  }, [id, mutate]);

  const length = data?.results?.length;

  return (
    <>
      {length !== 0 && (
        <>
          <div className="text-center font-bold text-lg my-5">
            Similar Movies
          </div>
          <List
            loading={isPending}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={data?.results || []}
            pagination={{ position: "bottom" }}
            renderItem={(movie) => (
              <List.Item key={movie.id}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <MovieImage movie={movie} />
                  <MovieDetails movie={movie} />
                  <GenreTags genreIds={movie.genre_ids} />
                </Card>
              </List.Item>
            )}
          />
        </>
      )}
    </>
  );
};

export default SimilarMovies;
