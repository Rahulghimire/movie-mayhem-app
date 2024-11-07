import React from "react";
import { getGenreName } from "../helpers";

interface GenreTagsProps {
  genreIds: number[];
}

export const GenreTags: React.FC<GenreTagsProps> = ({ genreIds }) => {
  return (
    <div className="px-4 pb-4 flex flex-wrap gap-2">
      {genreIds.slice(0, 3).map((genreId) => (
        <span
          key={genreId}
          className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
        >
          {getGenreName(genreId)}
        </span>
      ))}
    </div>
  );
};
