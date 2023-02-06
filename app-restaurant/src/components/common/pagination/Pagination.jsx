import React from 'react';

const Pagination = ({ totalPages, setCurrentPage, prevPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPages / prevPage); i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button key={page} className="button button--outline" onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
