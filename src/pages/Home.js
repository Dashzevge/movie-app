import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, getAllGenres } from '../services/movieApi';
import { Movies } from '../components/Movies';
import { SearchFilter } from '../components/SearchFilter';
import { Pagination } from '../components/Pagination';
import { setMovies } from '../redux/slices/moviesSlice';
import { setGenres } from '../redux/slices/movieFilterSlice'; 
import { setPage, setPageSize, setTotalPages } from '../redux/slices/movieFilterSlice';
import { setSearchTerm, setSelectedGenre } from '../redux/slices/movieFilterSlice'; 
import { API_ENDPOINTS } from '../constants';
import { useDebounce } from 'use-debounce';

export const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies); 
    const genres = useSelector((state) => state.movieFilters.genres);
    const { currentPage, pageSize, totalPages } = useSelector((state) => state.movieFilters);
    const { searchTerm, selectedGenre } = useSelector((state) => state.movieFilters);
    const [debouncedSearchTerm] = useDebounce(searchTerm, 100); 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getAllMovies(API_ENDPOINTS.MOVIES, currentPage, pageSize, debouncedSearchTerm, selectedGenre);
                dispatch(setMovies(response.data));
                dispatch(setTotalPages(response.totalPages));
            } catch (error) {
                console.error('Failed to getAllMovies', error);
            }
        };

        fetchMovies();
    }, [currentPage, pageSize, debouncedSearchTerm, selectedGenre, dispatch]);

    useEffect(() => {
        const fetchAllGenres = async () => {
            try {
                const response = await getAllGenres(API_ENDPOINTS.GENRES);
                dispatch(setGenres(response.data));
            } catch (error) {
                console.error('Failed to getAllGenres', error);
            }
        };

        fetchAllGenres();
    }, [dispatch]);

    const handleSearchChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    const handleGenreSelect = (genreId) => {
        dispatch(setSelectedGenre(genreId));
    };

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    };

    const handlePageSizeChange = (event) => {
        dispatch(setPageSize(Number(event.target.value)));
    };

    return (
        <div className="container">
            <SearchFilter
                genres={genres}
                selectedGenre={selectedGenre}
                search={searchTerm}
                onSearchChange={handleSearchChange}
                onGenreSelect={handleGenreSelect}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
            />
            <div className="row">
                <Movies movies={movies} />
            </div>
        </div>
    );
};

export default Home;
