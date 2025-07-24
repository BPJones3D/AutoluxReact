import './AdminPage-module.css';
/* 
todo list
----------
add new car popup
add new car functionality

delete car functionality
preview car functionality

edit car popup
edit car functionality

search name
search id

*/

function removeSpace(str) {
  return str.replace(/\s+/g, '');
}

function AdminCarTile({car}){
    return(
        <div className="tile-body">
            <img className="tile-car-image" src={`./carImages/${removeSpace(car.brand)}${removeSpace(car.name)}${car.year}_3x2_720x480.png`} alt={`${car.brand} ${car.name}`} />
            <div className="main-box">
                <div className="name-id">
                    <button onClick={() => navigator.clipboard.writeText(car.brand + " " + car.name + " " + car.year)}>
                        <p className="text-white">{car.brand} {car.name} {car.year}</p>
                    </button>
                    <button onClick={() => navigator.clipboard.writeText(car.id)}>
                        <p className="id-text">{car.id}</p>
                    </button>
                </div>
                <div className="details-buttons">
                    <div className="details">
                        <div className="detail-item">
                            <p>Colour</p>
                            <p className="detail-item-value">{car.colour}</p>
                        </div>
                        <div className="detail-item">
                            <p>Miles</p>
                            <p className="detail-item-value">{car.miles.toLocaleString()}</p>
                        </div>
                        <div className="detail-item">
                            <p>Seats</p>
                            <p className="detail-item-value">{car.seatCount}</p>
                        </div>
                        <div className="detail-item">
                            <p>Doors</p>
                            <p className="detail-item-value">{car.doorCount}</p>
                        </div>
                        <div className="detail-item">
                            <p>Transmission</p>
                            <p className="detail-item-value">{car.transmission}</p>
                        </div>
                        <div className="detail-item">
                            <p>Fuel</p>
                            <p className="detail-item-value">{car.fuelType}</p>
                        </div>
                        <div className="detail-item">
                            <p>Tank</p>
                            <p className="detail-item-value">{car.tankCapacity}L</p>
                        </div>
                        <div className="detail-item">
                            <p>MPG</p>
                            <p className="detail-item-value">{car.milesPerGallon}</p>
                        </div>
                        <div className="detail-item price">
                            <p>Price</p>
                            <p className="detail-item-value">£{car.price.toLocaleString()}</p>
                        </div>

                    </div>
                    <div className="buttons">
                        <button>
                            <img src={'./symbols/icon_delete_1.png'} alt="delete"></img>
                        </button>
                        <button>
                            <img src={'./symbols/icon_preview_1.png'} alt="preview"></img>
                        </button>
                        <button>
                            <img src={'./symbols/icon_edit_1.png'} alt="edit"></img>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCarTile;