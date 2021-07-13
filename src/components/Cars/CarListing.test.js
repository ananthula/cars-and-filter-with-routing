import { render, screen } from "@testing-library/react";
//import Filters from "../Filters";
import * as reactRedux from "react-redux";
import CarListing from "./CarListing";
import { Router } from "react-router-dom";

describe("Cars component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it("renders cars component", () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValue({
      color: "black",
      fuelType: "Petrol",
      manufacturerName: "Dodge",
      mileage: { number: 100002, unit: "km" },
      modelName: "Caliber",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
      stockNumber: 76630,
    });
    const { container } = render(
      <CarListing
        cars={[
          {
            color: "black",
            fuelType: "Petrol",
            manufacturerName: "Dodge",
            mileage: { number: 100002, unit: "km" },
            modelName: "Caliber",
            pictureUrl:
              "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
            stockNumber: 76630,
          },
          {
            color: "yellow",
            fuelType: "Petrol",
            manufacturerName: "Mercedes-Benz",
            mileage: { number: 100384, unit: "km" },
            modelName: "S-Coupe",
            pictureUrl:
              "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
            stockNumber: 58249,
          },
        ]}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it("handles view details link ", () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValue({
      color: "black",
      fuelType: "Petrol",
      manufacturerName: "Dodge",
      mileage: { number: 100002, unit: "km" },
      modelName: "Caliber",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
      stockNumber: 76630,
    });
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const { container } = render(
      <Router history={historyMock}>
        <CarListing
          cars={[
            {
              color: "black",
              fuelType: "Petrol",
              manufacturerName: "Dodge",
              mileage: { number: 100002, unit: "km" },
              modelName: "Caliber",
              pictureUrl:
                "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
              stockNumber: 76630,
            },
            {
              color: "yellow",
              fuelType: "Petrol",
              manufacturerName: "Mercedes-Benz",
              mileage: { number: 100384, unit: "km" },
              modelName: "S-Coupe",
              pictureUrl:
                "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
              stockNumber: 58249,
            },
          ]}
        />
      </Router>
    );
    document.getElementById("view-details").click();
    expect(container).toBeInTheDocument();
  });
});
