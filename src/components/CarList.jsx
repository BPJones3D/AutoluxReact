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
    var pageSize = 500 // add FRONT END for this later -- THIS CONTROLS HOW MANY CARS ARE SHOWN ON THE PAGE, CURRENTLY SET TO 500 FOR TESTING PURPOSES
    
    if(orderValue == true)
    {
        var filterOrder ="Descending"
    } else {
        var filterOrder ="Ascending"
    }
    

    const newFetchCars = async () => { //fetches the cars for that exact page

        var filter_string_fuelType = "";
        var filter_string_transmission = "";
        var filter_string_brand = "";

        fuelTypeValue.forEach(function(value, index, array){
            filter_string_fuelType += "&fuelType=" + value["type"];
        })

        transmissionValue.forEach(function(value, index, array){
            filter_string_transmission += "&transmission=" + value["type"];
        })
        
        brandValue.forEach(function(value, index, array){
            filter_string_brand += "&brand=" + value["type"];
        })

        const newfetchedCars = await //"api/Car?filter=Price&page=1&pageSize=1"
        fetch(
                url 
                + "api/Car?" 
                + filter_string_fuelType
                + filter_string_transmission
                + filter_string_brand
                + "&page=" + page
                + "&pageSize=" + pageSize
                + "&filter=" + sortByValue 
                + "&filterOrder=" + filterOrder
                + "&search_value=" + searchValue
                + "&year_min=" + yearMinValue
                + "&year_max=" + yearMaxValue
                + "&price_min=" + priceMinValue
                + "&price_max=" + priceMaxValue
                + "&miles_min=" + milesMinValue
                + "&miles_max=" + milesMaxValue
                + "&mpg_min=" + mpgMinValue
                + "&mpg_max=" + mpgMaxValue
                + "&tankCapacity_min=" + tankCapacityMinValue
                + "&tankCapacity_max=" + tankCapacityMaxValue
                + "&evRange_min=" + evRangeMinValue
                + "&evRange_max=" + evRangeMaxValue
                + "&seatCount_min=" + seatsMinValue
                + "&seatCount_max=" + seatsMaxValue
                + "&doorCount_min=" + doorsMinValue
                + "&doorCount_max=" + doorsMaxValue
                ,
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
        fuelTypeValue,
        transmissionValue,
        brandValue,
        fuelTypeValue,
        transmissionValue,
        brandValue
    ]);

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