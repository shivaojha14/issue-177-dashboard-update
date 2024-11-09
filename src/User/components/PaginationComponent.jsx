import React from "react";

const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  nPages,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={goToPrevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""}`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
