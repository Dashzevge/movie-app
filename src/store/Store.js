import { configureStore } from '@reduxjs/toolkit';
import movieDetailReducer from '../redux/slices/movieDetailSlice';
import moviesReducer from '../redux/slices/moviesSlice';
import genresReducer from '../redux/slices/genresSlice';
import paginationReducer from '../redux/slices/paginationSlice';
import searchReducer from '../redux/slices/searchSlice';

const store = configureStore({
  reducer: {
    movieDetail: movieDetailReducer,
    movies: moviesReducer,
    genres: genresReducer,
    pagination: paginationReducer,
    search: searchReducer,
  },
});

export default store;
