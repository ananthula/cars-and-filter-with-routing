import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Filters from "./Filters";
import { useSelector, useDispatch } from "react-redux";
import { Router } from "react-router-dom";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe("testing filters", () => {
  test("renders color and manufacturer filters", async () => {
    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selector) =>
      selector({
        cars: {
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
        },
      })
    );
    useDispatch.mockReturnValue(mockedDispatch);
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    render(
      <Router history={historyMock}>
        <Filters />
      </Router>
    );
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
    await waitFor(() => {
      expect(filterColorButton[0]).toBeInTheDocument();
    });
    fireEvent.click(filterColorButton[0]);
    document.getElementById("manufacturerFilter").click();
    await waitFor(() => {
      expect(filterManufactureButton[0]).toBeInTheDocument();
    });
    fireEvent.click(manufacturerFilter);
    fireEvent.click(filterManufactureButton[0]);
    expect(document.getElementById("colorFilter").textContent).toBe("red");
    expect(document.getElementById("manufacturerFilter").textContent).toBe(
      "Fiat"
    );
  });
});
