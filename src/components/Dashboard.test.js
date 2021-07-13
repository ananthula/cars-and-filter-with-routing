import {
  act,
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Dashboard";
import { Router } from "react-router-dom";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe("testing Dashboard component", () => {
  it("renders Dashboard component with car info details ", async () => {
    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selector) =>
      selector({
        ui: {
          notification: "",
        },
        cars: {
          cars: [
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
          ],
          colors: {
            colors: ["red", "yellow"],
          },
          manufacturers: {
            manufacturers: [
              {
                name: "Fiat",
                models: [
                  {
                    name: "Marea",
                  },
                ],
              },
            ],
          },
          car: {
            color: "black",
            fuelType: "Petrol",
            manufacturerName: "Dodge",
            mileage: { number: 100002, unit: "km" },
            modelName: "Caliber",
            pictureUrl:
              "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
            stockNumber: 76630,
          },
        },
      })
    );
    useDispatch.mockReturnValue(mockedDispatch);
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const locationMock = { pathname: "" };

    const { container } = render(
      <Router history={historyMock} location={locationMock}>
        <Dashboard />{" "}
      </Router>
    );
    expect(container).toBeInTheDocument;
  });

  it("Triggers filter button on left nav component & renders car details", async () => {
    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selector) =>
      selector({
        ui: {
          notification: "",
        },
        cars: {
          cars: [],
          colors: {
            colors: ["red", "yellow"],
          },
          manufacturers: {
            manufacturers: [
              {
                name: "Fiat",
                models: [
                  {
                    name: "Marea",
                  },
                ],
              },
            ],
          },
          car: "",
        },
      })
    );
    useDispatch.mockReturnValue(mockedDispatch);
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    render(
      <Router history={historyMock}>
        <Dashboard />{" "}
      </Router>
    );
    await waitFor(() => {
      expect(document.getElementById("filter-button")).toBeInTheDocument();
    });
    let colorFilter, manufacturerFilter;
    act(() => {
      colorFilter = screen.getByTestId("colorFilterId");
    });
    act(() => {
      manufacturerFilter = screen.getByTestId("manufacturerFilterId");
    });
    const filterColorButton = colorFilter.getElementsByClassName(
      "dropdown-item"
    );
    const filterManufactureButton = manufacturerFilter.getElementsByClassName(
      "dropdown-item"
    );
    expect(colorFilter).toBeInTheDocument();
    expect(manufacturerFilter).toBeInTheDocument();
    document.getElementById("colorFilter").click();
    fireEvent.click(filterColorButton[0]);
    document.getElementById("manufacturerFilter").click();
    await waitFor(() => {
      expect(filterManufactureButton[0]).toBeInTheDocument();
    });
    fireEvent.click(manufacturerFilter);
    fireEvent.click(filterManufactureButton[0]);

    document.getElementById("filter-button").click();
    expect(document.querySelector(".CarDetails")).toBeInTheDocument();
  });
});
