import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({
  firstPage,
  prevPage,
  nextPage,
  lastPage,
  currentPage,
}) => {
  const pageNumber = useSelector((state) => state.cars.page);

  return (
    <div className="paginate">
      <a
        id="first-page"
        className={pageNumber === 1 ? "disabled" : ""}
        onClick={(event) => firstPage(event)}
      >
        First
      </a>
      <a
        id="prev-page"
        onClick={() => prevPage()}
        className={pageNumber === 1 ? "disabled" : ""}
      >
        Previous
      </a>
      <span>Page {currentPage} of 100</span>
      <a
        id="next-page"
        onClick={() => nextPage()}
        className={pageNumber == 100 ? "disabled" : ""}
      >
        Next
      </a>
      <a
        id="last-page"
        className={pageNumber == 100 ? "disabled" : ""}
        onClick={(event) => lastPage(event)}
      >
        Last
      </a>
    </div>
  );
};

export default Pagination;
