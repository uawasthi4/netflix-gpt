export const USER_PHOTO =
  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png";

export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const YOUTUBE_VIDEO_EMBED_URL = "https://www.youtube.com/embed/";

export const MOVIE_POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en-US", name: "English" },
  { identifier: "hi-IN", name: "Hindi" },
  { identifier: "es-ES", name: "Spanish" },
];

export const CLAUDEAI_KEY = process.env.REACT_APP_CLAUDEAI_KEY;

export const GOOGLEAI_KEY = process.env.REACT_APP_GOOGLEAI_KEY;
