import { StarOutlined } from "@ant-design/icons";
interface Props {
  movie: { poster_path: string; title: string; vote_average: number };
}
export const MovieImage: React.FC<Props> = ({ movie }) => (
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
);
