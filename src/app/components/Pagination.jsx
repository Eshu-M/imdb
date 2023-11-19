import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextClick, onPrevClick }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onPrevClick}
        disabled={currentPage === 1}
        className="bg-gray-300 hover:bg-gray-400 hover:cursor-pointer text-gray-800 font-bold py-2 px-4 rounded-l disabled:hover:cursor-not-allowed disabled:bg-gray-100"
      >
        Previous
      </button>
      <button
        onClick={onNextClick}
        disabled={currentPage === totalPages}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
