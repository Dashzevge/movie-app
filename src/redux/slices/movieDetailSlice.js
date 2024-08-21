import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieDetailsById } from '../../services/movieApi';
import { API_ENDPOINTS } from '../../constants';

export const fetchMovieDetails = createAsyncThunk(
  'movieDetail/fetchMovieDetails',
  async (id) => {
    const response = await getMovieDetailsById(API_ENDPOINTS.MOVIES, id);
    return response;
  }
);

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState: {
    movie: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieDetailSlice.reducer;
