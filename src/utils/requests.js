// api key e2a11eee9d189804182d267a87a4bea2

export const requestRecentFilms = async () => {
  const request = fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e2a11eee9d189804182d267a87a4bea2&language=en-US&page=1');
  const response = (await request).json();
  return response;
}

export const requestFrequentFilms = async () => {
  const request = fetch('https://api.themoviedb.org/3/movie/popular?api_key=e2a11eee9d189804182d267a87a4bea2&language=en-US&page=1');
  const response = (await request).json();
  return response;
}

export const requestSoonFilms = async () => {
  const request = fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e2a11eee9d189804182d267a87a4bea2&language=en-US&page=1');
  const response = (await request).json();
  return response;
}

export const requestFilmImage = async (movie_id) => {
  const request = fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=e2a11eee9d189804182d267a87a4bea2&language=en-USinclude_image_language=en,null`);
  const response = (await request).json();
  return response;
}

export const requestConfigFilms = async () => {
  const request = fetch('https://api.themoviedb.org/3/configuration?api_key=e2a11eee9d189804182d267a87a4bea2');
  const response = (await request).json();
  return response;
}