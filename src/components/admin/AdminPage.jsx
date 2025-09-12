import React, { use, useState, useEffect } from "react";
import AdminCarTile from './AdminCarTile';


function alertUser(str) {
  alert(str)
}


function NavMenu({onCarEditClicked, onCarPreviewClicked, onNewCarClicked, url, bearerToken})
{
    const [fetchedCars, setFetchedCars] = useState([]);
    const [carQuantity, setCarQuantity] = useState();

    var page = 1 // add FRONT END for this later
    var pageSize = 100 // add FRONT END for this later

    const newFetchCars = async () => { //fetches the cars for that exact page
        const newfetchedCars = await 
        fetch(url + "api/car?page=" + page + "&pageSize=" + pageSize, 
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
    });


    const newCar = {
    "id": "1",
    "brand": "New Brand",
    "name": "New Name",
    "year": 2020,
    "price": 99999,
    "miles": 99999,
    "transmission": "Manual",
    "fuelType": "Petrol",
    "tankCapacity": 99,
    "milesPerGallon": 99.9,
    "seatCount": "9",
    "doorCount": 9,
    "colour": "Red",
    "description": "Just a test car."
}

    return (
        <div>
            <div className="text-white text-center pt-5">
                <h2 className="pb-0 mb-0">ADMIN PANEL</h2>
                <div className="container info-panel">
                    <i><p className="text-info">Showing {fetchedCars.length} / {carQuantity} Cars</p></i>
                    <button className="add-new-car-btn" onClick={() => {console.log(newCar); onNewCarClicked()}}>
                        <p>+ Add New Car</p>
                    </button>
                </div>
            </div>


            <div className="container tile-container">
                {fetchedCars.map(car => (
                    <AdminCarTile 
                        car={car} 
                        onEditBtnClicked={() => onCarEditClicked(car)} 
                        onPreviewBtnClicked={() => onCarPreviewClicked(car)}
                        url={url}
                        bearerToken={bearerToken}
                    />
                ))}
            </div>
        </div>
    );
}
export default NavMenu;