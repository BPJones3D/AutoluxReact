import './CarTile-module.css';

function removeSpace(str) {
  return str.replace(/\s+/g, '');
}

function CarTile({ car, onTileClicked }) {
  return (
    <div className="car-tile" onClick={() => onTileClicked((car))}>
        {/* car image and name */}
        <img src={`./carImages/${removeSpace(car.brand)}${removeSpace(car.name)}${car.year}_3x2_720x480.png`} alt={`${car.brand} ${car.name}`} />
        <h2 className="car-name fw-light">{car.brand} {car.name}</h2>

        {/* car details */}
        <div className="car-details-container">

            <div className="car-details-row">
                <div className="car-details-item">
                    <p className="detail-title">Year</p>
                    <p className="detail-value">{car.year}</p>
                </div>
                <div className="car-details-item">
                    <p className="detail-title">Miles</p>
                    <p className="detail-value">{car.miles.toLocaleString()}</p>
                </div>
            </div>

            <div className="car-details-row">
                <div className="car-details-item">
                    <p className="detail-title">Transmission</p>
                    <p className="detail-value">{car.transmission}</p>
                </div>
                <div className="car-details-item">
                    <p className="detail-title">Fuel</p>
                    <p className="detail-value">{car.fuelType}</p>
                </div>
            </div>

            <div className="car-details-row">
                <div className="car-details-item">
                    {car.fuelType === 'Electric' ? (  
                        <p className="detail-title">Range</p>
                        
                    ) : (
                        <p className="detail-title">Tank</p>
                    )}

                    {car.fuelType === 'Electric' ? (  
                        <p className="detail-value">{car.tankCapacity}Mi</p> 
                        
                    ) : (
                        <p className="detail-value">{car.tankCapacity}L</p>
                    )}
                    
                       
                </div>
                {car.fuelType === 'Electric' ? (  
                        <></>
                    ) : (
                        <div className="car-details-item">
                            <p className="detail-title">MPG</p>
                            <p className="detail-value">{car.milesPerGallon}</p>
                        </div>
                    )}
                
                <div className="car-details-item">
                    <p className="detail-title">Seats</p>
                    <p className="detail-value">{car.seatCount}</p>
                </div>
                <div className="car-details-item">
                    <p className="detail-title">Doors</p>
                    <p className="detail-value">{car.doorCount}</p>
                </div>
            </div>
        </div>

        {/* price container */}
        <div className="car-price-container">
            <h3 className="fullPrice p-0 m-0 fw-bold">£{car.price.toLocaleString()}</h3>
            <div className="montlyPriceContainer">
              <h3 className="monthlyPrice fs-6">or</h3>
              <h3 className="monthlyPrice fs-4 fw-bold">£{Math.ceil((car.price / 52)).toLocaleString()}</h3>
              <h3 className="monthlyPrice fs-6">p/m</h3>
            </div>
        </div>
    </div>
  );
}

export default CarTile;