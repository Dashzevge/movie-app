
import React from 'react';
export const SearchFilter = ({ genres, selectedGenre, search, onSearchChange, onGenreSelect }) => {
    return (
        <div className="row justify-content-md-center">   
            <div className="input-group mb-3" id="buttonGroup">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedGenre ? genres.find(g => g.title === selectedGenre)?.title : 'All Genres'}
                </button>
                <ul className="dropdown-menu">
                    <li key="all">
                        <button className="dropdown-item" onClick={() => onGenreSelect('')}>
                            All Genres
                        </button>
                    </li>
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <button className="dropdown-item" onClick={() => onGenreSelect(genre.title)}>
                                {genre.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <input 
                    type="search" 
                    className="form-control" 
                    aria-label="Text input with dropdown button" 
                    value={search} 
                    onChange={onSearchChange} 
                />
            </div>
        </div>
    );
};
