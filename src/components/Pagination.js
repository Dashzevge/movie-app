import React from 'react';

export const Pagination = ({ currentPage, totalPages, onPageChange, onPageSizeChange }) => {
    return (
        <div className="row md-3">
            <div className="col d-flex justify-content-between">
                <div>
                    <label htmlFor="pageSize" className="form-label">Page Size:</label>
                    <select id="pageSize" className="form-select" onChange={onPageSizeChange}>    
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="mx-2">Page {currentPage} of {totalPages}</span>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
