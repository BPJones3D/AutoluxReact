import './CarDetailsPage-module.css';



function removeSpace(str) {
  return str.replace(/\s+/g, '');
}



function CarDetailsPage({car, OnReturn})
{

    if(car){
        return(
            <div className="details-bg">
                <div className="CarDetails-panel container">
                    <div className="content container">
                        <button className="return-to-results" onClick={() => OnReturn()}>
                            <img src={"./symbols/icon_return_1.png"} alt="return icon"></img>
                            <p>Return to results</p>
                        </button>

                        <div className="feature-section">

                            <div className="featured-image"> {/* large picture of car and "view gallery" button */}
                                <img className="car-image" src={`./carImages/${removeSpace(car.brand)}${removeSpace(car.name)}${car.year}_3x2_720x480.png`} alt={``} /> {/* make this take from prop */}
                                {console.log(car)}
                                <button className="gallery-btn" onClick={() => console.log("view-gallery...")}>
                                    <img src={"./symbols/icon_gallery.png"} alt="return icon"></img>
                                    <p>View gallery</p>
                                </button>
                            </div>

                            <div className="important-details-panel"> {/* important details to the right of the large car picture */}
                                <div className="idp-section">
                                    <div className="details-name">
                                        <h2 class="scaling-text">{car.brand} {car.name}</h2>
                                        <h4>{car.year}</h4>
                                    </div>
                                    <div className="details-tags">
                                        <span className="tag-tile">{car.fuelType}</span>
                                        <span className="tag-tile">{car.transmission}</span>
                                        <span className="tag-tile">{car.miles.toLocaleString()} Mi</span>
                                        <span className="tag-tile">{car.colour}</span>
                                        <span className="tag-tile">{car.doorCount} Doors</span>
                                        <span className="tag-tile">{car.seatCount} Seats</span>
                                    </div>    
                                </div>
                                <div className="idp-details-price-box">
                                    <h1>£{car.price.toLocaleString()}</h1>
                                    <p>or £{Math.ceil((car.price/52)).toLocaleString()} per month</p>
                                </div>
                                <div className="idp-section idp-bottom">
                                    <p className="idp-disclaimer"><b>How finance is calculated:</b> Finance offerings (per month) are calculated from the asking price, and then divided by the amount of weeks in a year (52). For example: an asking price of £52,000 would offer a finance plan of £1,000 per month.</p>
                                    <button className="idp-contact-seller-btn" onClick={() => console.log("contact seller...")}>
                                        Contact Seller
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else{
        return(true);
    }
};

export default CarDetailsPage;