import { AxiosResponse } from "axios";
import { apiInstance } from "./axios";
import { DiscoveryMovieApiResponse, Genre } from "../../../types";

interface DiscoveryMoviesProps {
  page: number;
  results: DiscoveryMovieApiResponse[];
}

export const getSeries = async (): Promise<DiscoveryMoviesProps> => {
  try {
    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(`/discover/tv/`);

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log("Error fetching movies:", error);
    return error.message;
  }
};

export const filterSeries = async (query: string, page?: number) => {
  try {
    if (!query) return getSeries();
    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(
      `/search/tv?query=${encodeURI(query)}&page=${page ?? 1}&limit=12`
    );

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log("Error fetching movies:", error);
    return error.message;
  }
};

export const getMovieGenres = async () => {
  try {
    const res: AxiosResponse<{
      genres: Genre[];
    }> = await apiInstance.get(`/genre/movie/list`);

    const result = res.data;
    return { genres: result.genres };
  } catch (error: any) {
    console.log("Error fetching movies:", error);
    return error.message;
  }
};
