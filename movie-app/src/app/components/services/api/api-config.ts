import { environment } from "src/environment/environment";

export const API_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3/movie/popular',
    API_KEY: environment.apiKey,
    search_url: 'https://api.themoviedb.org/3'
  };
  