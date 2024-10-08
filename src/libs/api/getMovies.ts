import { AxiosResponse } from "axios";
import { apiInstance } from "./axios";
import {
  DiscoveryMovieApiResponse,
  APIResponse,
  TrendingMedias,
  MoviesDetails,
} from "../../../types";

interface DiscoveryMoviesProps {
  page: number;
  results: DiscoveryMovieApiResponse[];
  total_pages: number;
  total_results: number;
}

interface TrendingMediasProps {
  page: number;
  results: TrendingMedias[];
}

export const moviesDiscovery = async (
  page?: number,
  sort_by?: string,
  year?: number,
  with_genres?: string
): Promise<APIResponse> => {
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

    const res: AxiosResponse<APIResponse> = await apiInstance.get(url);

    const result = res.data;

    return {
      page: result.page,
      results: result.results,
      total_pages: result.total_pages,
      total_results: result.total_results,
    };
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
): Promise<APIResponse> => {
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

    const res: AxiosResponse<APIResponse> = await apiInstance.get(url);

    const result = res.data;
    return {
      page: result.page,
      results: result.results,
      total_pages: result.total_pages,
      total_results: result.total_results,
    };
  } catch (error: any) {
    return error.message;
  }
};

export const getTrendingMedias = async (): Promise<TrendingMediasProps> => {
  try {
    const res: AxiosResponse<{
      page: number;
      results: TrendingMedias[];
    }> = await apiInstance.get("/trending/all/day");

    const result = res.data;

    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

export const movieDetails = async (id: number) => {
  try {
    const res: AxiosResponse<MoviesDetails> = await apiInstance.get(
      `/movie/${id}/images`
    );
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
};
