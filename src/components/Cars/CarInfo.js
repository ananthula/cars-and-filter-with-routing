import { useEffect, useState } from "react";

const CarInfo = ({ carInfo }) => {

    let content = 'This car is currently availble and can be delivered as soon as\ntomorrow morning. Please be aware that delivery times shown in\nthis page are not definitive and may change due to bad weather\nconditions';
    let str = "Stock # " + carInfo.stockNumber + " - " + carInfo.mileage.number + " " + carInfo.mileage.unit.toUpperCase() + " - " + carInfo.fuelType + " - " + carInfo.color;
    const [isSaved, setSaved] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem('carsData')) {
            setSaved(JSON.parse(sessionStorage.getItem('carsData')).some(c => c.stockNumber == carInfo.stockNumber));
        }
    }, [carInfo]);

    const handleSave = () => {
        if (isSaved) {
            sessionStorage.setItem('carsData', JSON.stringify(JSON.parse(sessionStorage.getItem('carsData')).filter(c => c.stockNumber != carInfo.stockNumber)));
            setSaved(false);
        } else {
            if (sessionStorage.getItem('carsData')) {
                sessionStorage.setItem('carsData', JSON.stringify([...JSON.parse(sessionStorage.getItem('carsData')), carInfo]))
            } else {
                sessionStorage.setItem('carsData', JSON.stringify([carInfo]))
            } 
            setSaved(true);
        }
    }

    return (
        <div className="carInfo">
            <div className="carInfoImage">
                <img src={carInfo.pictureUrl} alt="Car" className="carInfoImg" />
            </div>
            <div className="carNameAndDesc">
                <h3 style={{ margin: '12px' }}>{carInfo.manufacturerName + " " + carInfo.modelName}</h3>
                <div style={{ margin: '12px' }}>{str}</div>
                <div style={{ margin: '12px' }}>{content}</div>
            </div>
            <div className="saveCar">
                <div>
                    <p>If you like this car, click the button and
                    save it in your collection of favourite
                    items</p>
                    <button className="filter" onClick={handleSave}>{
                        isSaved ? 'Saved' : 'Save'}</button>
                </div>

            </div>
        </div>
    );


}
export default CarInfo;