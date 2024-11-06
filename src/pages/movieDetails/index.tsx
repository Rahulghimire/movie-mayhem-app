// import { useFetchMovieDetails } from "@/services/api-hooks";
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

// export const MovieDetails: React.FC = () => {
//   const { id } = useParams<Record<string, string | undefined>>();

//   const { mutate, data, isLoading } = useFetchMovieDetails();

//   useEffect(() => {
//     if (id) {
//       mutate(id);
//     }
//   }, [id]);

//   return <div>{id}</div>;
// };

// export default MovieDetails;

import { useFetchMovieDetails } from "@/services/api-hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductionCompanies } from "./ProductionCompany";
import { formatCurrency } from "./helpers";

const MovieDetails = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const { mutate, data, isPending } = useFetchMovieDetails();

  useEffect(() => {
    if (id) {
      mutate(id);
    }
  }, [id, mutate]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageBaseUrl}${data?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-end pb-10">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">{data?.title}</h1>
              <p className="text-xl italic mb-4">{data?.tagline}</p>
              <div className="flex items-center gap-4">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">
                  ★ {data?.vote_average.toFixed(1)}
                </span>
                <span>{new Date(data?.release_date).getFullYear()}</span>
                <span>{data?.runtime} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Poster */}
          <div>
            <img
              src={`${imageBaseUrl}${data.poster_path}`}
              alt={data?.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 mb-6">{data?.overview}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold text-gray-900">Budget</h3>
                <p className="text-gray-700">{formatCurrency(data?.budget)}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Revenue</h3>
                <p className="text-gray-700">{formatCurrency(data?.revenue)}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {data?.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <ProductionCompanies
              production_companies={data?.production_companies}
              imageBaseUrl={imageBaseUrl}
            />

            {data?.belongs_to_collection && (
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Part of Collection
                </h3>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <img
                    src={`${imageBaseUrl}${data.belongs_to_collection.poster_path}`}
                    alt={data.belongs_to_collection.name}
                    className="w-20 rounded"
                  />
                  <div>
                    <p className="font-semibold">
                      {data.belongs_to_collection.name}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
