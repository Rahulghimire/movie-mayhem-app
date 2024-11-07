import React from "react";
import { GenresProps } from "../types";

export const Genres: React.FC<GenresProps> = ({ genres }) => (
  <div className="mb-6">
    <h3 className="font-bold text-gray-900 mb-2">Genres</h3>
    <div className="flex flex-wrap gap-2">
      {genres?.map((genre) => (
        <span
          key={genre.id}
          className="bg-gray-200 px-3 py-1 rounded-full text-sm"
        >
          {genre.name}
        </span>
      ))}
    </div>
  </div>
);
