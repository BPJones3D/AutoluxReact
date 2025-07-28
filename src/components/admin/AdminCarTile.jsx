import './AdminPage-module.css';

function removeSpace(str) {
  return str.replace(/\s+/g, '');
}

function alertUser(str) {
  alert(str)
}

const deleteCar = async (carToDelete) => {
    try {
        const response = await fetch(`https://localhost:44357/api/car`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(carToDelete),
        });

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("Deleted car:", carToDelete);
        window.location.reload();
    } catch (error) {
        alertUser("CAR DELETION FAILED - Something went wrong...");
        console.error("Error deleting car:", error, carToDelete);
    }
};

function AdminCarTile({car, onEditBtnClicked, onPreviewBtnClicked}){
    return(
        <div className="tile-body">
            
            <img 
                className="tile-car-image" 
                src={`./carImages/${removeSpace(car.brand)}${removeSpace(car.name)}${car.year}_3x2_720x480.png`} 
                alt={`${car.brand} ${car.name}`} 
                onError={(e) =>{
                    e.target.onError = null;
                    e.target.src = `./carImages/missing_car_image_3x2_720x480.png`;
                }}
            />
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
                        <button onClick={() => deleteCar(car)}>
                            <img src={'./symbols/icon_delete_1.png'} alt="delete"></img>
                        </button>
                        <button onClick={() => onPreviewBtnClicked(car)}>
                            <img src={'./symbols/icon_preview_1.png'} alt="preview"></img>
                        </button>
                        <button onClick={() => onEditBtnClicked(car)}>
                            <img src={'./symbols/icon_edit_1.png'} alt="edit"></img>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCarTile;