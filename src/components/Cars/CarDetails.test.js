import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import CarListing from './CarListing';

describe('Car details component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    test('renders car details component with mock data', () => {
        const mockedDispatch = jest.fn();
        useDispatchMock.mockReturnValue(mockedDispatch);
        useSelectorMock.mockReturnValue(
            [
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
                }]);
        useSelectorMock.mockReturnValue(

            {
                color: "black",
                fuelType: "Petrol",
                manufacturerName: "Dodge",
                mileage: { number: 100002, unit: "km" },
                modelName: "Caliber",
                pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
                stockNumber: 76630
            }
        );
        const { container } = render(<CarListing />);
        expect(container).toBeInTheDocument();
    })

})
