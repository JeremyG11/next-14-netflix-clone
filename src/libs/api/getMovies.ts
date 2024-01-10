import { AxiosResponse } from "axios";
import { apiInstance } from "./axios";
import { DiscoveryMovieApiResponse } from "../../../types";

interface DiscoveryMoviesProps {
  page: number;
  results: DiscoveryMovieApiResponse[];
}

export const moviesDiscovery = async (
  page?: number,
  sort_by?: string,
  year?: number,
  with_genres?: string
): Promise<DiscoveryMoviesProps> => {
  try {
    let url = `/discover/movie?`;
    if (page) {
      url += `page=${page}&`;
    }

    if (sort_by) {
      url += `sort_by=${sort_by}&`;
    }

    if (year) {
      url += `primary_release_year=${year}&`;
    }
    if (with_genres) {
      url += `with_genres=${with_genres}`;
    }

    const res: AxiosResponse<{
      page: number;
      results: DiscoveryMovieApiResponse[];
    }> = await apiInstance.get(url);

    const result = res.data;
    console.log(url);

    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

export const filterMovies = async (
  query: string,
  page?: number,
  sort_by?: string,
  year?: number,
  with_genres?: string
) => {
  try {
    if (!query) return moviesDiscovery(page, sort_by, year, with_genres);

    let url = `/search/movie?query=${encodeURI(query)}`;

    if (sort_by) {
      url += `&sort_by=${sort_by}`;
    }

    if (year) {
      url += `&primary_release_year=${year}`;
    }

    if (with_genres) {
      url += `&with_genres=${with_genres}`;
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
