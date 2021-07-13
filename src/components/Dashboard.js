import Filters from "./Filters";
import CarDetails from "./Cars/CarDetails";
import { useLocation } from "react-router";
import { carActions } from "../store/car-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Dashboard = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const carInfo = useSelector((state) => state.cars.car);
  useEffect(() => {
    if (location.pathname == "/") {
      if (carInfo) {
        dispatch(carActions.resetCarInfo());
      }
    }
    if (location.pathname == "/Cars") {
      if (carInfo) {
        dispatch(carActions.resetCarInfo());
      }
    }
  }, [location]);
  return (
    <div className="mainRegion">
      <Filters />
      <CarDetails />
    </div>
  );
};
export default Dashboard;
