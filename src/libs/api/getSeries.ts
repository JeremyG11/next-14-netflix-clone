import { AxiosResponse } from "axios";
import { apiInstance } from "./axios";
import { Genre, TVseries, TVseriesDetails } from "../../../types";

interface DiscoveryMoviesProps {
  page: number;
  results: TVseries[];
}

export const getSeries = async (
  page?: number,
  sort_by?: string,
  year?: number,
  with_genres?: string
): Promise<DiscoveryMoviesProps> => {
  try {
    let url = `/discover/tv?`;
    if (page) {
      url += `page=${page}&`;
    }

    if (sort_by) {
      url += `sort_by=${sort_by}&`;
    }

    if (year) {
      url += `first_air_date_year=${year}&`;
    }
    if (with_genres) {
      url += `with_genres=${with_genres}`;
    }

    const res: AxiosResponse<{
      page: number;
      results: TVseries[];
    }> = await apiInstance.get(url);

    const result = res.data;
    console.log(url);

    return { page: result.page, results: result.results };
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

// export const filterSeries = async (query: string, page?: number) => {
//   try {
//     if (!query) return getSeries();
//     const res: AxiosResponse<{
//       page: number;
//       results: TVseries[];
//     }> = await apiInstance.get(
//       `/search/tv?query=${encodeURI(query)}&page=${page ?? 1}&limit=12`
//     );

//     const result = res.data;
//     return { page: result.page, results: result.results };
//   } catch (error: any) {
//     return error.message;
//   }
// };

export const filterSeries = async (
  query: string,
  page?: number,
  sort_by?: string,
  year?: number,
  with_genres?: string
) => {
  try {
    if (!query) return getSeries(page, sort_by, year, with_genres);

    let url = `/search/tv?query=${encodeURI(query)}`;

    if (sort_by) {
      url += `&sort_by=${sort_by}`;
    }

    if (year) {
      url += `&first_air_date_year=${year}`;
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
      results: TVseries[];
    }> = await apiInstance.get(url);

    const result = res.data;
    return { page: result.page, results: result.results };
  } catch (error: any) {
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
    return error.message;
  }
};

export const seriesDetails = async (id: string) => {
  try {
    const res: AxiosResponse<TVseriesDetails> = await apiInstance.get(
      `/tv/${id}/images`
    );
    const result = res.data;
    return result;
  } catch (error: any) {
    return error.message;
  }
};
