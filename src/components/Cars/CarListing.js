import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCard from "../UI/SkeletonCard";
import { getCarInfo } from "../../store/car-actions";
import CarInfo from "./CarInfo";
import { useHistory } from "react-router-dom";

const CarListing = ({ cars, loading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const carInfo = useSelector((state) => state.cars.car);

  const showCarDetailsHandler = (event, stockNumber) => {
    event.preventDefault();
    dispatch(getCarInfo(stockNumber));
    const url = `/Car/${stockNumber}`;
    history.push(url);
  };

  const listOfCars =
    cars.length > 0 &&
    cars.map((carDetail) => {
      let str =
        "Stock # " +
        carDetail.stockNumber +
        " - " +
        carDetail.mileage.number +
        " " +
        carDetail.mileage.unit.toUpperCase() +
        " - " +
        carDetail.fuelType +
        " - " +
        carDetail.color;
      return (
        <div className="cardWrapper" key={carDetail.stockNumber}>
          <Card.Img src={carDetail.pictureUrl} className="cardImg" />
          <Card className="customCard">
            <Card.Body>
              <Card.Title className="cardTitle">
                {carDetail.manufacturerName + " " + carDetail.modelName}
              </Card.Title>
              <Card.Text className="cardText">{str} </Card.Text>
              <Card.Text className="cardText">
                <a
                  href="/"
                  id="view-details"
                  onClick={(event) =>
                    showCarDetailsHandler(event, carDetail.stockNumber)
                  }
                >
                  View Details
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </div>
      );
    });

  return (
    <>
      <div>
        {!loading && (
          <>
            <h3 className="heading">Available Cars</h3>
            <p>Showing {cars.length} of 100 results</p>
          </>
        )}
        {loading && <SkeletonCard />}
        {!loading && listOfCars}
      </div>
      {Object.entries(carInfo).length > 0 && <CarInfo carInfo={carInfo} />}
    </>
  );
};

export default CarListing;
