import exp from "constants";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface APIResponse {
  page: number;
  results: DiscoveryMovieApiResponse[];
  total_pages: number;
  total_results: number;
}

export interface DiscoveryMovieApiResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Genre = {
  id: number;
  name: string;
};

export type GenreWithMovies = {
  id: number;
  genre_name: string;
  hasMovies: boolean;
};

export interface TVseries {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TrendingMedias {
  adult: number;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
}

export interface TVseriesDetails {
  backdrops: [
    {
      aspect_ratio: number;
      height: number;
      iso_639_1: null;
      file_path: "/5AkPhazx8F0Ht74CUdJU03vNzBi.jpg";
      vote_average: number;
      vote_count: number;
      width: number;
    }
  ];
  id: number;
  logos: [];
  posters: [
    {
      aspect_ratio: number;
      height: number;
      iso_639_1: string;
      file_path: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }
  ];
}
export interface MoviesDetails {
  backdrops: [
    {
      aspect_ratio: number;
      height: number;
      iso_639_1: null;
      file_path: "/aCAvih7z9D8FZHrF8sSSaczl9N8.jpg";
      vote_average: number;
      vote_count: number;
      width: number;
    }
  ];
  id: 532;
  logos: [
    {
      aspect_ratio: number;
      height: number;
      iso_639_1: "en";
      file_path: "/awLdurWqZs1vPZM4zSNGssvf8Ox.png";
      vote_average: number;
      vote_count: number;
      width: number;
    }
  ];
  posters: [
    {
      aspect_ratio: number;
      height: number;
      iso_639_1: "en";
      file_path: "/qdIR27trLyrlJ5nmkbcG3Bomah6.jpg";
      vote_average: number;
      vote_count: number;
      width: number;
    }
  ];
}
