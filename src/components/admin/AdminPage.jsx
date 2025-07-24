import React, { use, useState } from "react";
import AdminCarTile from './AdminCarTile';

const fetchCars = fetch('https://localhost:44357/api/car').then(response => response.json());

function NavMenu()
{

    const carResult = use(fetchCars);
    const [cars, setCars] = useState(carResult);

    return (
        <div>
            <div className="text-white text-center pt-5">
                <h2 className="pb-0 mb-0">ADMIN PANEL</h2>
                <div className="container info-panel">
                    <i><p className="text-info">Showing {cars.length}/{cars.length} Cars</p></i>
                    <button className="add-new-car-btn">
                        <p>+ Add New Car</p>
                    </button>
                </div>
            </div>


            <div className="container tile-container">
                {cars.map(car => (
                    <AdminCarTile car={car}/>
                ))}
            </div>
        </div>
    );
}
export default NavMenu;