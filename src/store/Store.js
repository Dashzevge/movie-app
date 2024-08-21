import { configureStore } from '@reduxjs/toolkit';
import movieDetailReducer from '../redux/slices/movieDetailSlice';
import moviesReducer from '../redux/slices/moviesSlice';
import movieFilterReducer from '../redux/slices/movieFilterSlice'; 


const store = configureStore({
  reducer: {
    movieFilters: movieFilterReducer,
    movieDetail: movieDetailReducer,
    movies: moviesReducer
  },
});

export default store;
