const apiKey = import.meta.env.VITE_API_API_KEY;

import { axiosInstance } from "@/axios";
import { queryKeys } from "@/axios/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { MovieResponseProps } from "./types";

export const useFetchPopularMovies = (): UseQueryResult<MovieResponseProps> => {
  return useQuery<MovieResponseProps>({
    queryKey: [queryKeys.popular_movies],
    queryFn: () =>
      axiosInstance
        .get<MovieResponseProps>(`/movie/popular?api_key=${apiKey}`)
        .then((res) => res.data),
  });
};

export const useSearchMovies = (query: string): UseQueryResult<any> => {
  return useQuery<MovieResponseProps, Error>({
    queryKey: [queryKeys.popular_movies, query],
    queryFn: () =>
      axiosInstance
        .get<MovieResponseProps>(
          `/search/movie?api_key=${apiKey}&query=${query}`
        )
        .then((res) => res.data),
    enabled: !!query,
  });
};
