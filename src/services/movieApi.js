import apiClient from '../middleware/apiClient';

export const getAllMovies = async (url, page, limit, search, genre ) => {
  try {
    const response = await apiClient.get(`/${url}?page=${page}&limit=${limit}&search=${search}&genre=${genre}`);
    return response.data;
  } catch (error) {
    console.error('Error getAllmovies:', error);
    throw error;
  }
};

export const getMovieDetailsById = async (url, id) => {
  try {
    const response = await apiClient.get(`/${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details with id:' + id + '', error);
    throw error;
  }
};

export const getAllGenres = async (url) => {
  try {
    const response = await apiClient.get(`/${url}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres details', error);
    throw error;
  }
};
