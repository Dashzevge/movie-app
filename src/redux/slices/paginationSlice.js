import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_PAGE,INITIAL_PAGE_SIZE,INITIAL_TOTAL } from '../../constants';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: INITIAL_PAGE,
    pageSize: INITIAL_PAGE_SIZE,
    totalPages: INITIAL_TOTAL,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.currentPage = 1; // Reset to first page
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setPage, setPageSize, setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;
