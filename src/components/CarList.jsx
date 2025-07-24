import React, { use, useState } from "react";
import CarTile from "./CarTile";
import './CarList-module.css';

const fetchCars = fetch('https://localhost:44357/api/car').then(response => response.json());

function CarList({
    sortByValue,
    orderValue,
    searchValue,
    yearMinValue, yearMaxValue,
    priceMinValue, priceMaxValue,
    milesMinValue, milesMaxValue,
    mpgMinValue, mpgMaxValue,
    tankCapacityMinValue, tankCapacityMaxValue,
    evRangeMinValue, evRangeMaxValue,
    seatsMinValue, seatsMaxValue,
    doorsMinValue, doorsMaxValue,
    fuelTypeValue = [],
    transmissionValue = [],
    brandValue = [],
    onCarClicked
})
{
    const carResult = use(fetchCars);
    const [cars, setCars] = useState(carResult);
    
    if (yearMinValue > yearMaxValue){
        const oldMin = yearMinValue; const oldMax = yearMaxValue
        yearMinValue = oldMax; yearMaxValue = oldMin
    }
    if (priceMinValue > priceMaxValue){
        const oldMin = priceMinValue; const oldMax = priceMaxValue
        priceMinValue = oldMax; priceMaxValue = oldMin
    }
    if (milesMinValue > milesMaxValue){
        const oldMin = milesMinValue; const oldMax = milesMaxValue
        milesMinValue = oldMax; milesMaxValue = oldMin
    }
    if (mpgMinValue > mpgMaxValue){
        const oldMin = mpgMinValue; const oldMax = mpgMaxValue
        mpgMinValue = oldMax; mpgMaxValue = oldMin
    }    
    if (tankCapacityMinValue > tankCapacityMaxValue){
        const oldMin = tankCapacityMinValue; const oldMax = tankCapacityMaxValue
        tankCapacityMinValue = oldMax; tankCapacityMaxValue = oldMin
    }
    if (evRangeMinValue > evRangeMaxValue){
        const oldMin = evRangeMinValue; const oldMax = evRangeMaxValue
        evRangeMinValue = oldMax; evRangeMaxValue = oldMin
    }  
    if (seatsMinValue > seatsMaxValue){
        const oldMin = seatsMinValue; const oldMax = seatsMaxValue
        seatsMinValue = oldMax; seatsMaxValue = oldMin
    }
    if (doorsMinValue > doorsMaxValue){
        const oldMin = doorsMinValue; const oldMax = doorsMaxValue
        doorsMinValue = oldMax; doorsMaxValue = oldMin
    } 

    const filteredCars = cars.filter(
        (car) => 
            (searchValue.length === 0 || (car.brand + " " + car.name).toLowerCase().includes(searchValue.toLowerCase())) &&
            car.year >= yearMinValue && car.year <= yearMaxValue &&
            car.price >= priceMinValue && car.price <= priceMaxValue &&
            car.miles >= milesMinValue && car.miles <= milesMaxValue &&
            car.milesPerGallon >= mpgMinValue && car.milesPerGallon <= mpgMaxValue &&
            (car.transmission === "EV" 
                ? car.tankCapacity >= evRangeMinValue && car.tankCapacity <= evRangeMaxValue
                : car.tankCapacity >= tankCapacityMinValue && car.tankCapacity <= tankCapacityMaxValue)&&
            car.seatCount >= seatsMinValue && car.seatCount <= seatsMaxValue &&
            car.doorCount >= doorsMinValue && car.doorCount <= doorsMaxValue &&
            (fuelTypeValue.length === 0 || fuelTypeValue.some(option => option.type === car.fuelType))&&
            (transmissionValue.length === 0 || transmissionValue.some(option => option.type === car.transmission))&&
            (brandValue.length === 0 || brandValue.some(option => option.type === car.brand))
    );

const sortedCars = filteredCars.slice().sort((a, b) => {
    let field;
    switch (sortByValue) {
        case "Relevancy":
            field = "id";
            break;
        case "Price":
            field = "price";
            break;
        case "Year":
            field = "year";
            break;
        case "Miles":
            field = "miles";
            break;
        case "MPG":
            field = "milesPerGallon";
            break;
        case "Brand":
            field = "brand";
            break;
        case "Doors":
            field = "doorCount";
            break;
        default:
            field = "id"; // sort by name in default case
            break;
    }
    if (typeof a[field] === "string") {
        return orderValue
            ? a[field].localeCompare(b[field])
            : b[field].localeCompare(a[field]);
    } else {
        return orderValue
            ? b[field] - a[field]
            : a[field] - b[field];
    }
});
    return (
        <div className="forSale-container">
            <div className="text-white text-center pt-5 pb-2">
                <h2 className="pb-0 mb-0">For Sale</h2>
                <i><p className="text-info">{filteredCars.length} cars found</p></i>
            </div>
            <div className="container d-flex flex-wrap justify-content-center">
                {sortedCars.map(car => (
                    <CarTile key={car.id} car={car} onTileClicked={onCarClicked}/>
                ))}
            </div>
        </div>
    );
}

export default CarList;