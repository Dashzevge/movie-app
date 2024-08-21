import React from 'react';
import { Link } from 'react-router-dom';
import { NO_IMAGE } from '../constants';

export const Movie = ({ movie }) => {
    return (
        <div className="card">
            <img src={movie.posterUrl || NO_IMAGE} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                    <small className="text-muted">Rate: {movie.rating}</small>
                </p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    );
};
