import React, { use, useState } from "react";
import CarTile from "./CarTile";
import './CarList-module.css';

const fetchCars = fetch('https://localhost:44357/api/car').then(response => response.json());


const tempCarArray = [
    { 
        id: 1, 
        brand: 'Ford',
        name: 'Focus ST', 
        price: 18999,
        year: 2020,
        miles: 73827,
        transmission: 'Manual',
        fuel: 'Petrol',
        tank: 5.2,
        mpg: 40,
        seats: 5,
        doors: 5,
    },
    {
        id: 2,
        brand: 'BMW',
        name: 'M3',
        year: 2021,
        price: 69999,
        miles: 12546,
        transmission: 'Automatic',
        fuel: 'Diesel',
        tank: 5.0,
        mpg: 30,
        seats: 4,
        doors: 2,
    },
    {
        id: 3,
        brand: 'Audi',
        name: 'A4',
        year: 2020,
        price: 39999,
        miles: 15540,
        transmission: 'Automatic',
        fuel: 'Petrol',
        tank: 5.0,
        mpg: 35,
        seats: 5,
        doors: 4,
    }
];

function CarList()
{

    const carResult = use(fetchCars);
    const [cars, setCars] = useState(carResult);

    return (
        <div className="forSale-container">
            <h2 className="text-white text-center pt-5 pb-2">For Sale</h2>
            <div className="container d-flex flex-wrap justify-content-center">
                {cars.map(car => (
                    <CarTile key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default CarList;