import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));
describe("Pagination component", () => {
  it("renders pagination component", () => {
    useSelector.mockReturnValue((selector) =>
      selector({
        cars: {
          page: 1,
        },
      })
    );
    const { container } = render(<Pagination />);
    expect(container).toBeInTheDocument();
  });
  it("check if first, prev buttons are disabled initially ", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        cars: {
          page: 1,
        },
      })
    );
    render(<Pagination />);
    expect(screen.getByText("First")).toHaveAttribute("class", "disabled");
    expect(screen.getByText("Previous")).toHaveAttribute("class", "disabled");
  });
  it("call first page/last page on pagination component", () => {
    const firstPage = jest.fn();
    const lastPage = jest.fn();
    useSelector.mockImplementation((selector) =>
      selector({
        cars: {
          page: 2,
        },
      })
    );
    render(<Pagination firstPage={firstPage} lastPage={lastPage} />);
    expect(firstPage).toBeCalledTimes(0);
    expect(lastPage).toBeCalledTimes(0);
    document.getElementById("last-page").click();
    expect(lastPage).toBeCalledTimes(1);
  });

  it("call prev page/next page on pagination component", () => {
    const nextPage = jest.fn();
    const prevPage = jest.fn();

    useSelector.mockImplementation((selector) =>
      selector({
        cars: {
          page: 2,
        },
      })
    );
    render(<Pagination nextPage={nextPage} prevPage={prevPage} />);
    expect(nextPage).toBeCalledTimes(0);
    expect(prevPage).toBeCalledTimes(0);
    document.getElementById("next-page").click();
    expect(nextPage).toBeCalledTimes(1);
    document.getElementById("prev-page").click();
    expect(prevPage).toBeCalledTimes(1);
  });

  it("check last/next buttoons are disbaled on last page on pagination component", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        cars: {
          page: 100,
        },
      })
    );
    render(<Pagination />);
    expect(screen.getByText("Last")).toHaveAttribute("class", "disabled");
    expect(screen.getByText("Next")).toHaveAttribute("class", "disabled");
  });
});
