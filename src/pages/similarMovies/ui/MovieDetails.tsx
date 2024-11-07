import { CalendarOutlined, LikeOutlined } from "@ant-design/icons";

interface Props {
  movie: {
    title: string;
    release_date: string;
    vote_count: number;
    overview: string;
  };
}
export const MovieDetails: React.FC<Props> = ({ movie }) => (
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
        <span className="text-white">{movie?.vote_count} votes</span>
      </div>
    </div>

    <p className="text-sm text-gray-400 line-clamp-3">{movie?.overview}</p>
  </div>
);
