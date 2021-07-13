import { useDispatch, useSelector } from "react-redux";
import ErrorNotification from "./UI/ErrorNotification";
import CarInfo from "../components/Cars/CarInfo";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { getCarInfo } from "../store/car-actions";

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const carInfo = useSelector((state) => state.cars.car);
  const errorInfo = useSelector((state) => state.ui.notification);
  const isCarDataAvailable = Object.entries(carInfo).length > 0;
  useEffect(() => {
    //  let stockNumber = location.pathname.split("/")[2];
    dispatch(getCarInfo(location.pathname.split("/")[2]));
  }, [location]);
  return (
    <div className="mainRegion">
      {errorInfo && (
        <ErrorNotification status={errorInfo.status} title={errorInfo.title} />
      )}
      {!errorInfo && isCarDataAvailable && <CarInfo carInfo={carInfo} />}
    </div>
  );
};
export default Main;
