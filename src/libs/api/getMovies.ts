import { AxiosResponse } from "axios";
import { apiInstance } from "./axios";
import { DiscoveryMovieApiResponse } from "../../../types";

interface DiscoveryMoviesProps {
  page: number;
  results: DiscoveryMovieApiResponse[];
}

export const moviesDiscovery = async (
  query: string,
  page?: number,
  sort_by?: string,
  year?: number
): Promise<DiscoveryMoviesProps> => {
  try {
    let url = `/search/movie?query=${encodeURI(query)}`;

    if (sort_by) {
      url += `&sort_by=${sort_by}`;
    }

    if (year) {
      url += `&primary_release_year=${year}`;
    }

    if (page) {
      url += `&page=${page}`;
    } else {
      url += `&page=1`;
    }
    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(`/discover/movie/`);

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
    return error.message;
  }
};

export const filterMovies = async (
  query: string,
  page?: number,
  sort_by?: string,
  year?: number
) => {
  try {
    if (!query) return moviesDiscovery();

    let url = `/search/movie?query=${encodeURI(query)}`;

    if (sort_by) {
      url += `&sort_by=${sort_by}`;
    }

    if (year) {
      url += `&primary_release_year=${year}`;
    }

    if (page) {
      url += `&page=${page}`;
    } else {
      url += `&page=1`;
    }

    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(url);

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
    return error.message;
  }
};
