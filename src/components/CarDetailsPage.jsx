import './CarDetailsPage-module.css';
import { useState } from 'react';



function removeSpace(str) {
  return str.replace(/\s+/g, '');
}


const collapseIcons = [
    './symbols/icon_chevron_up_1.png',
    './symbols/icon_chevron_down_1.png'
];


function CarDetailsPage({car, OnReturn})
{
    const [descIconState, setDescIconState] = useState(collapseIcons[0]);
    const [techSummaryIconState, setTechSummaryIconState] = useState(collapseIcons[0]);
    const [descriptionCollapsed, setDescriptionCollapsed] = useState(false);
    const [technicalCollapsed, setTechnicalCollapsed] = useState(false);
    
    const changeDescIcon = () => {
        if(descIconState === collapseIcons[0]){
            setDescIconState(collapseIcons[1])
            setDescriptionCollapsed(true)
        }
        else if(descIconState === collapseIcons[1]){
            setDescIconState(collapseIcons[0])
            setDescriptionCollapsed(false)
        }
    };

    const changeTecIcon = () => {
        if(techSummaryIconState === collapseIcons[0]){
            setTechSummaryIconState(collapseIcons[1])
            setTechnicalCollapsed(true)
        }
        else if(techSummaryIconState === collapseIcons[1]){
            setTechSummaryIconState(collapseIcons[0])
            setTechnicalCollapsed(false)
        }
    };

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
                                <img 
                                className="car-image" 
                                src={`./carImages/${removeSpace(car.brand)}${removeSpace(car.name)}${car.year}_3x2_720x480.png`} 
                                alt={``} 
                                onError={(e) =>{
                                    e.target.onError = null;
                                    e.target.src = `./carImages/missing_car_image_3x2_720x480.png`;
                                }}
                                /> {/* make this take from prop */}
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

                        <div className="description-section">

                            <button className="details-collapse-btn" onClick={() => changeDescIcon()}>
                                <img src={descIconState} alt="return icon"></img>
                                <h3>Description</h3>
                            </button>
                            <span>
                                {!descriptionCollapsed &&
                                    <p className="description-text">{car.description}</p>
                                }
                            </span>
                        </div>
                        <div className="page-divider"/>
                        <div className="tech-summary-section">

                            <button className="details-collapse-btn" onClick={() => changeTecIcon()}>
                                <img src={techSummaryIconState} alt="return icon"></img>
                                <h3>Technical Summary</h3>
                            </button>
                            <span>
                                {!technicalCollapsed &&
                                    <div className="technical-table text-white">
                                        <div className="tech-column">
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Brand</p>
                                                <p className="tech-tile-value">{car.brand}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Model</p>
                                                <p className="tech-tile-value">{car.name}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Year</p>
                                                <p className="tech-tile-value">{car.year}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Asking Price</p>
                                                <p className="tech-tile-value">£{car.price.toLocaleString()}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Colour</p>
                                                <p className="tech-tile-value">{car.colour}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Miles</p>
                                                <p className="tech-tile-value">{car.miles.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="tech-column">
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Fuel</p>
                                                <p className="tech-tile-value">{car.fuelType}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Transmission</p>
                                                <p className="tech-tile-value">{car.transmission}</p>
                                            </div>

                                            {car.fuelType === "Electric" ? 
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Range</p>
                                                <p className="tech-tile-value">{car.tankCapacity} Miles</p> 
                                            </div>
                                            :
                                            <>
                                                <div className="tech-tile">
                                                    <p className="tech-tile-title">Tank</p>
                                                    <p className="tech-tile-value">{car.tankCapacity} Liters</p> 
                                                </div>
                                                <div className="tech-tile">
                                                    <p className="tech-tile-title">MPG</p>
                                                    <p className="tech-tile-value">{car.milesPerGallon}</p>
                                                </div>
                                            </>                               
                                            }
                                                

                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Doors</p>
                                                <p className="tech-tile-value">{car.doorCount}</p>
                                            </div>
                                            <div className="tech-tile">
                                                <p className="tech-tile-title">Seats</p>
                                                <p className="tech-tile-value">{car.seatCount}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </span>

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