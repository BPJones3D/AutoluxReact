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

    const sortedCars = filteredCars.sort()

    return (
        <div className="forSale-container">    
            <div className="text-white text-center pt-5 pb-2">
                <h2 className="pb-0 mb-0">For Sale</h2>
                <i><p className="text-info">{filteredCars.length} cars found</p></i>
            </div>

            {sortByValue === "Relevancy" && console.log("sort by relevancy")}
            {sortByValue === "Price" && console.log("sort by price")}
            {sortByValue === "Year" && console.log("sort by year")}
            {sortByValue === "Miles" && console.log("sort by mile")}
            {sortByValue === "MPG" && console.log("sort by mpg")}

            {console.log(sortedCars)}

            {orderValue === true && console.log("in ascending order")}
            {orderValue === false && console.log("in descending order")}

            <div className="container d-flex flex-wrap justify-content-center test1">
                {filteredCars.map(car => (
                    <CarTile key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default CarList;