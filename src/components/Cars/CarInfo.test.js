import { render } from "@testing-library/react";
import CarInfo from "./CarInfo";

describe('car Info component', () => {

    test('renders car info component', () => {
        const { container } = render(<CarInfo carInfo={{
        color: "blue",
        fuelType: "Petrol",
        manufacturerName: "Chrysler",
        mileage: { number: 101755, unit: "km" },
        modelName: "Vision",
        pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
        stockNumber: 74250
        }} />);
        expect(container).toBeInTheDocument();
    })
});