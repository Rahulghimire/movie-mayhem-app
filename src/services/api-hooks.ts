const apiKey = import.meta.env.VITE_API_API_KEY;

import { axiosInstance } from "@/axios";
import { queryKeys } from "@/axios/queryKeys";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  MovieCollectionProps,
  MovieResponseProps,
  SimilarMovieProps,
} from "./types";

export const useFetchPopularMovies = (): UseQueryResult<MovieResponseProps> => {
  return useQuery<MovieResponseProps>({
    queryKey: [queryKeys.popular_movies],
    queryFn: () =>
      axiosInstance
        .get<MovieResponseProps>(`/movie/popular?api_key=${apiKey}`)
        .then((res) => res.data),
  });
};

export const useFetchSimilarMovies = (): UseMutationResult<
  SimilarMovieProps,
  Error,
  string
> => {
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstance.get<SimilarMovieProps>(
        `/movie/${id}/similar`,
        {
          params: {
            api_key: apiKey,
            // collection_id: id,
          },
        }
      );
      return response.data;
    },
  });
};

export const useFetchMovieDetails = (): UseMutationResult<
  MovieCollectionProps,
  Error,
  string
> => {
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstance.get(`/movie/${id}`, {
        params: {
          api_key: apiKey,
          // collection_id: id,
        },
      });
      return response.data;
    },
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
