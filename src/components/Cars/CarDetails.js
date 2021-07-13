import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarData } from "../../store/car-actions";
import CarListing from "./CarListing";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";

const CarDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cars = useSelector((state) => state.cars.cars);
  const [loading, setLoading] = useState(false);
  const pageNumber = useSelector((state) => state.cars.page);

  const [currentPage, setCurrentPage] = useState(pageNumber);

  const nextPage = () => setCurrentPage((prevPageNumber) => prevPageNumber + 1);
  const prevPage = () => setCurrentPage((prevPageNumber) => prevPageNumber - 1);
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(100);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      dispatch(
        getCarData(
          history.location ?.search ?.split("&")[1] ?.split("=")[1] || "",
          history.location ?.search ?.split("&")[0] ?.split("=")[1] || "",
          currentPage
        )
      );
      setLoading(false);
    }, 2000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, [currentPage, dispatch]);

  return (
    <div className="CarDetails">
      <CarListing cars={cars} loading={loading} />
      {cars.length > 0 && (
        <Pagination
          firstPage={firstPage}
          prevPage={prevPage}
          nextPage={nextPage}
          lastPage={lastPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default CarDetails;
