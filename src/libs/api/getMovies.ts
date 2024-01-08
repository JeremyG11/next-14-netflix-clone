import { AxiosResponse } from "axios";
import { apiInstance } from "./axios";
import { DiscoveryMovieApiResponse } from "../../../types";

interface DiscoveryMoviesProps {
  page: number;
  results: DiscoveryMovieApiResponse[];
}

export const moviesDiscovery = async (): Promise<DiscoveryMoviesProps> => {
  try {
    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(`/discover/movie/`);

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log("Error fetching movies:", error);
    return error.message;
  }
};

export const filterMovies = async (query: string, page?: number) => {
  try {
    if (!query) return moviesDiscovery();
    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(
      `/search/movie?query=${encodeURI(query)}&limit=8&page=${page ?? 1}`
    );

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log("Error fetching movies:", error);
    return error.message;
  }
};
