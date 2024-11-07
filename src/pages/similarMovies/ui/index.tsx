import { Card, List } from "antd";
import { useFetchSimilarMovies } from "@/services/api-hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CalendarOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { getGenreName } from "../helpers";

export const SimilarMovies: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const { mutate, data, isPending } = useFetchSimilarMovies();

  useEffect(() => {
    if (id) {
      mutate(id);
    }
  }, [id, mutate]);

  return (
    <>
      <div className="text-center font-bold text-lg my-5">Similar Movies</div>
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
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={
                      movie?.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                        : `/api/placeholder/500/750`
                    }
                    alt={movie?.title}
                    className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md flex items-center gap-1">
                  <StarOutlined className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">
                    {movie?.vote_average?.toFixed(1)}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-blue-600">
                  {movie?.title}
                </h3>

                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CalendarOutlined className="w-4 h-4 text-white" />
                    <span className="text-white">
                      {new Date(movie?.release_date).getFullYear()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LikeOutlined className="w-4 h-4 text-white" />
                    <span className="text-white">
                      {movie?.vote_count} votes
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 line-clamp-3">
                  {movie?.overview}
                </p>
              </div>

              {movie?.genre_ids && (
                <div className="px-4 pb-4 flex flex-wrap gap-2">
                  {movie.genre_ids.slice(0, 3).map((genreId) => (
                    <span
                      key={genreId}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {getGenreName(genreId)}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default SimilarMovies;
