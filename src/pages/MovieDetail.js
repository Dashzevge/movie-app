import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../redux/slices/movieDetailSlice';
import { FormatDuration } from '../utils/FormatDuration';
import { NO_IMAGE } from '../constants';

export const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie, status, error } = useSelector((state) => state.movieDetail);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }
    }, [id, dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className="container">
            {movie && (
                <div className="card">
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={movie.posterUrl || NO_IMAGE} className="img-fluid rounded-start" alt={movie.title || "No title available"} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title || "No title available"}</h5>
                            <p className="card-text">{movie.summary || "No summary available"}</p>
                            <p className="card-text"><strong>Rating:</strong> {movie.rating || "No rating available"}</p>
                            <p className="card-text"><strong>Duration:</strong> {movie.duration ? FormatDuration(movie.duration) : "No duration available"}</p>
                            <p className="card-text"><strong>Release Date:</strong> {movie.datePublished ? new Date(movie.datePublished).toLocaleDateString() : "No release date available"}</p>
                            <p className="card-text"><strong>Rating Value:</strong> {movie.ratingValue || "No rating value"} / {movie.bestRating || "No best rating"}</p>
                            <p className="card-text"><strong>Directors:</strong> {movie.directors?.length ? movie.directors.join(', ') : "No directors available"}</p>
                            <p className="card-text"><strong>Main Actors:</strong> {movie.mainActors?.length ? movie.mainActors.join(', ') : "No main actors available"}</p>
                            <p className="card-text"><strong>Writers:</strong> {movie.writers?.length ? movie.writers.join(', ') : "No writers available"}</p>
                            <p className="card-text"><strong>Genres:</strong> {movie.genres?.length ? movie.genres.map(genre => genre.title).join(', ') : "No genres available"}</p>
                            <Link to={`/`} className="btn btn-primary">Home</Link>
                        </div>
                    </div>
                  </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
