import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_PAGE, INITIAL_PAGE_SIZE, INITIAL_TOTAL } from '../../constants';

const movieFilterSlice = createSlice({
  name: 'movieFilters',
  initialState: {
    genres: [],
    currentPage: INITIAL_PAGE,
    pageSize: INITIAL_PAGE_SIZE,
    totalPages: INITIAL_TOTAL,
    searchTerm: '',
    selectedGenre: '',
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.currentPage = 1; 
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
      state.currentPage = 1; 
    },
  },
});

export const {
  setGenres,
  setPage,
  setPageSize,
  setTotalPages,
  setSearchTerm,
  setSelectedGenre,
} = movieFilterSlice.actions;

export default movieFilterSlice.reducer;
