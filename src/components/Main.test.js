import { render } from "@testing-library/react";
import { useSelector, useDispatch } from 'react-redux';
import Main from "./Main";
import { Router } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe("testing main component", () => {
  it("renders main component with car info details ", async () => {
    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selector) =>
      selector({
        ui: {
          notification: ''
        },
        cars: {
          colors: {
            colors: ["red", "yellow"]
          },
          manufacturers: {
            manufacturers:
              [
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
          car:
          {
            color: "black",
            fuelType: "Petrol",
            manufacturerName: "Dodge",
            mileage: { number: 100002, unit: "km" },
            modelName: "Caliber",
            pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
            stockNumber: 76630
          },

        },
      })
    );
    useDispatch.mockReturnValue(mockedDispatch);
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const locationMock = { pathname: "/Car/47402" };

    const { container } = render(<Router history={historyMock} location={locationMock}>
      <Main /> </Router>);
    expect(container).toBeInTheDocument
  });
  it("renders Error notification component", async () => {
    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selector) =>
      selector({
        ui: {
          notification: {
            status: '404',
            title: 'Error!'
          }
        },
        cars: {
          car:
          {
            color: "black",
            fuelType: "Petrol",
            manufacturerName: "Dodge",
            mileage: { number: 100002, unit: "km" },
            modelName: "Caliber",
            pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
            stockNumber: 76630
          },
          cars: [
            {
              color: "black",
              fuelType: "Petrol",
              manufacturerName: "Dodge",
              mileage: { number: 100002, unit: "km" },
              modelName: "Caliber",
              pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
              stockNumber: 76630
            },
            {
              color: "yellow",
              fuelType: "Petrol",
              manufacturerName: "Mercedes-Benz",
              mileage: { number: 100384, unit: "km" },
              modelName: "S-Coupe",
              pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
              stockNumber: 58249
            }]
        },
      })
    );
    useDispatch.mockReturnValue(mockedDispatch);
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const locationMock = { pathname: '' };

    const { container } = render(<Router history={historyMock} location={locationMock}>
      <Main /> </Router>);
    expect(document.querySelector('.notification')).toBeInTheDocument();
  });
});
