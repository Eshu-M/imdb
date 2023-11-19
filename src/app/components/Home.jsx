'use client'; // Assuming you meant 'use strict' instead of 'use client'

import React, { useState, useEffect } from 'react';
import Results from './Results';
import Pagination from './Pagination';

const HomePage = ({ genre, API_KEY }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${
            genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
          }?api_key=${API_KEY}&language=en-US&page=${currentPage}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to Fetch data");
        }

        setResults(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [genre, API_KEY,currentPage]);

  const handleNextPage = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const handlePrevPage = async () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };
  return (
    <div>
      <Results results={results} />
      <Pagination
        currentPage={currentPage}
        totalPages={10} // Replace 'totalPages' with the actual total number of pages
        onNextClick={handleNextPage}
        onPrevClick={handlePrevPage}
      />
    </div>
  );
};

export default HomePage;