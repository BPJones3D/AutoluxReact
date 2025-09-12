import React, { use, useState, useEffect } from "react";
import CarTile from "./CarTile";
import './CarList-module.css';

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
    onCarClicked,
    url
})
{    
    const [fetchedCars, setFetchedCars] = useState([]);
    const [carQuantity, setCarQuantity] = useState();

    var page = 1 // add FRONT END for this later
    var pageSize = 5 // add FRONT END for this later
    
    if(orderValue == true)
    {
        var filterOrder ="Descending"
    } else {
        var filterOrder ="Ascending"
    }
    

    const newFetchCars = async () => { //fetches the cars for that exact page
        const newfetchedCars = await //"api/Car?filter=Price&page=1&pageSize=1"
        fetch(
                url 
                + "api/Car" 
                + "?filter=" + sortByValue 
                + "&filterOrder=" + filterOrder 
                + "&page=" + page 
                + "&pageSize=" + pageSize, 
            {
            method: 'GET',
            })
        .then(response => response.json());
        setFetchedCars(newfetchedCars)

        const newCarQuantity = await //fetches the quantity of cars in the database
        fetch(url + "api/Car/car-quantity", 
            {
            method: 'GET',
            })
        .then(response => response.json());
        setCarQuantity(newCarQuantity)
    }

    useEffect(() => { // resets the filters when the page changes
        newFetchCars();
    }, [sortByValue,
        orderValue
    ]);



    // if (yearMinValue > yearMaxValue){
    //     const oldMin = yearMinValue; const oldMax = yearMaxValue
    //     yearMinValue = oldMax; yearMaxValue = oldMin
    // }
    // if (priceMinValue > priceMaxValue){
    //     const oldMin = priceMinValue; const oldMax = priceMaxValue
    //     priceMinValue = oldMax; priceMaxValue = oldMin
    // }
    // if (milesMinValue > milesMaxValue){
    //     const oldMin = milesMinValue; const oldMax = milesMaxValue
    //     milesMinValue = oldMax; milesMaxValue = oldMin
    // }
    // if (mpgMinValue > mpgMaxValue){
    //     const oldMin = mpgMinValue; const oldMax = mpgMaxValue
    //     mpgMinValue = oldMax; mpgMaxValue = oldMin
    // }    
    // if (tankCapacityMinValue > tankCapacityMaxValue){
    //     const oldMin = tankCapacityMinValue; const oldMax = tankCapacityMaxValue
    //     tankCapacityMinValue = oldMax; tankCapacityMaxValue = oldMin
    // }
    // if (evRangeMinValue > evRangeMaxValue){
    //     const oldMin = evRangeMinValue; const oldMax = evRangeMaxValue
    //     evRangeMinValue = oldMax; evRangeMaxValue = oldMin
    // }  
    // if (seatsMinValue > seatsMaxValue){
    //     const oldMin = seatsMinValue; const oldMax = seatsMaxValue
    //     seatsMinValue = oldMax; seatsMaxValue = oldMin
    // }
    // if (doorsMinValue > doorsMaxValue){
    //     const oldMin = doorsMinValue; const oldMax = doorsMaxValue
    //     doorsMinValue = oldMax; doorsMaxValue = oldMin
    // } 

    // const filteredCars = fetchedCars.filter(
    //     (car) => 
    //         (searchValue.length === 0 || (car.brand + " " + car.name).toLowerCase().includes(searchValue.toLowerCase())) &&
    //         car.year >= yearMinValue && car.year <= yearMaxValue &&
    //         car.price >= priceMinValue && car.price <= priceMaxValue &&
    //         car.miles >= milesMinValue && car.miles <= milesMaxValue &&
    //         car.milesPerGallon >= mpgMinValue && car.milesPerGallon <= mpgMaxValue &&
    //         (car.transmission === "EV" 
    //             ? car.tankCapacity >= evRangeMinValue && car.tankCapacity <= evRangeMaxValue
    //             : car.tankCapacity >= tankCapacityMinValue && car.tankCapacity <= tankCapacityMaxValue)&&
    //         car.seatCount >= seatsMinValue && car.seatCount <= seatsMaxValue &&
    //         car.doorCount >= doorsMinValue && car.doorCount <= doorsMaxValue &&
    //         (fuelTypeValue.length === 0 || fuelTypeValue.some(option => option.type === car.fuelType))&&
    //         (transmissionValue.length === 0 || transmissionValue.some(option => option.type === car.transmission))&&
    //         (brandValue.length === 0 || brandValue.some(option => option.type === car.brand))
    // );

// const sortedCars = filteredCars.slice().sort((a, b) => {
//     let field;
//     switch (sortByValue) {
//         case "Relevancy":
//             field = "id";
//             break;
//         case "Price":
//             field = "price";
//             break;
//         case "Year":
//             field = "year";
//             break;
//         case "Miles":
//             field = "miles";
//             break;
//         case "MPG":
//             field = "milesPerGallon";
//             break;
//         case "Brand":
//             field = "brand";
//             break;
//         case "Doors":
//             field = "doorCount";
//             break;
//         default:
//             field = "id"; // sort by name in default case
//             break;
//     }
//     if (typeof a[field] === "string") {
//         return orderValue
//             ? a[field].localeCompare(b[field])
//             : b[field].localeCompare(a[field]);
//     } else {
//         return orderValue
//             ? b[field] - a[field]
//             : a[field] - b[field];
//     }
// });
    return (
        <div className="forSale-container">
            <div className="text-white text-center pt-5 pb-2">
                <h2 className="pb-0 mb-0">For Sale</h2>
                <i><p className="text-info">Showing {fetchedCars.length} / {carQuantity} Cars</p></i>
            </div>
            <div className="container d-flex flex-wrap justify-content-center">
                {fetchedCars.map(car => (
                    <CarTile 
                        key={car.id} 
                        car={car} 
                        onTileClicked={onCarClicked}
                    />
                ))}
            </div>
        </div>
    );
}

export default CarList;