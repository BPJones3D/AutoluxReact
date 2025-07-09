import React, { use, useState } from "react";
import CarTile from "./CarTile";
import './CarList-module.css';

const fetchCars = fetch('https://localhost:44357/api/car').then(response => response.json());

function CarList({
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

    arr = [1, 3, 4, 2, 99, 56, 12],
    arrSorted = arr.sort()
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

    return (
        <div className="forSale-container">
            <div className="m-5">
                    {/* dev visuals - shows filter stats
                <p className="text-white">Year: {yearMinValue} {yearMaxValue}</p>
                <p className="text-white">Price: {priceMinValue} {priceMaxValue}</p>
                <p className="text-white">Miles: {milesMinValue} {milesMaxValue}</p>
                <p className="text-white">MPG: {mpgMinValue} {mpgMaxValue}</p>
                <p className="text-white">Tank Cap: {tankCapacityMinValue} {tankCapacityMaxValue}</p>
                <p className="text-white">Ev Range: {evRangeMinValue} {evRangeMaxValue}</p>
                <p className="text-white">Seats: {seatsMinValue} {seatsMaxValue}</p>
                <p className="text-white">Doors: {doorsMinValue} {doorsMaxValue}</p>

                <br></br>

                <p className="text-white">Transmission Type:</p>
                {transmissionValue.map((option) => (
                    <p className="text-white"> -{option.type} </p>
                ))}
                <br></br>
                <p className="text-white">Fuel Type:</p>
                {fuelTypeValue.map((option) => (
                    <p className="text-white"> -{option.type} </p>
                ))}
                <br></br>
                <p className="text-white">Brand:</p>
                {brandValue.map((option) => (
                    <p className="text-white"> -{option.type} </p>
                ))} 
                    
                <p className="text-white">Price: {priceMinValue} {priceMaxValue}</p>
                <p className="text-white">Result: {searchValue}</p>*/} 

            </div>      
            <div className="text-white text-center pt-5 pb-2">
                <h2 className="pb-0 mb-0">For Sale</h2>
                <i><p className="text-info">{filteredCars.length} cars found</p></i>
            </div>
            
            <div className="container d-flex flex-wrap justify-content-center test1">
                {filteredCars.map(car => (
                    <CarTile key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default CarList;