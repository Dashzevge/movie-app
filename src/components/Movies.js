import React from 'react';
import { Movie } from './Movie';


export const Movies = ({ movies }) => {
    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-3">
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};
