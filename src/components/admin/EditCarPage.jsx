import './EditNewCarPage-module.css';
import { useState, setState, use } from 'react';

function removeSpace(str) {
  return str.replace(/\s+/g, '');
}

function EditCarPage({carSelected = {}, onSaveBtnPressed, OnReturn, siteURL, bearerToken}) {
  var url = siteURL;
  var bearer = 'Bearer ' + bearerToken




  const [brandValue, setBrandValue] = useState(carSelected.brand);
  const [nameValue, setNameValue] = useState(carSelected.name);
  const [yearValue, setYearValue] = useState(carSelected.year);
  const [priceValue, setPriceValue] = useState(carSelected.price);

  const [seatValue, setSeatValue] = useState(carSelected.seatCount);
  const [doorValue, setDoorValue] = useState(carSelected.doorCount);

  const [milesValue, setMilesValue] = useState(carSelected.miles);
  const [colourValue, setColourValue] = useState(carSelected.colour);

  const [transmissionValue, setTransmissionValue] = useState(carSelected.transmission);
  const [FuelValue, setFuelValue] = useState(carSelected.fuelType);

  const [tankValue, setTankValue] = useState(carSelected.tankCapacity);
  const [mpgValue, setMpgValue] = useState(carSelected.milesPerGallon);

  const [descValue, setDescValue] = useState(carSelected.description);
  

  const [carToSend, setCarToSend] = useState(carSelected);

  const updateCarToSend = (newCarDetails) => {setCarToSend(newCarDetails)};


function alertUser(str) {
  alert(str)
}


  const putCarToApi = async () => {
    try {
      const response = await fetch(url + "api/car", {
        method: "PUT",
        withCredentials: true,
        headers: {
          'Authorization': bearer,
          "Content-Type": "application/json",      
        },
        body: JSON.stringify(carToSend),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Updated car:", result);
      OnReturn();
    } catch (error) {
      alertUser("SAVE FAILED - Something went wrong...");
      console.error("Error updating car:", error);
    }
  };

  return (
    <div className="container edit-car-container">
      
      <div className="edit-car-page">

        <div className="edit-car-details-section car-image-edit-section">
          <img 
            className="edit-car-image" 
            src={`./carImages/${removeSpace(carSelected.brand)}${removeSpace(carSelected.name)}${carSelected.year}_3x2_720x480.png`} 
            alt={`${carSelected.brand} ${carSelected.name}`} 
            onError={(e) =>{
                  e.target.onError = null;
                  e.target.src = `./carImages/missing_car_image_3x2_720x480.png`;
              }}
          />
        </div>

        <div className="edit-car-details-section main-edit-section">
          <div className="edit-car-details-header">
            <h2 className="text-white"><b>Edit Item</b></h2>
            <div className="buttons">
              <button onClick={() => OnReturn()}>
                  <img src={'./symbols/icon_cancel_1.png'} alt="cancel"></img>
              </button>
              <button onClick={() => {putCarToApi(); onSaveBtnPressed();}}>
                  <img src={'./symbols/icon_save_1.png'} alt="save"></img>
              </button>       
            </div>
          </div>
          
          <div className="edit-car-details-main-details">
            <p className="edit-car-details-id">{carSelected.id}</p>
            <div className="edit-car-details-tile">
              <p>Brand</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.brand} 
                value={brandValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setBrandValue(newValue)
                  updateCarToSend({ ...carToSend, brand: newValue})
                }}
              />
            </div>
            
            <div className="edit-car-details-tile">
              <p>Model</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.name} 
                value={nameValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setNameValue(newValue)
                  updateCarToSend({ ...carToSend, name: newValue})
                }}
              />
            </div>

            <div className="edit-car-details-tile">
              <p>Year</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.year} 
                value={yearValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setYearValue(newValue)
                  updateCarToSend({ ...carToSend, year: newValue})
                }}
              />
            </div>
            
            <div className="edit-car-details-tile">
              <p>Price</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.price} 
                value={priceValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setPriceValue(newValue)
                  updateCarToSend({ ...carToSend, price: newValue})
                }}
              />
            </div>
          </div>

        </div>

        <div className="edit-car-details-section">
          <div className="edit-car-details-tile">
              <p>Seats</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.seatCount} 
                value={seatValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setSeatValue(newValue)
                  updateCarToSend({ ...carToSend, seatCount: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>Doors</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.doorCount} 
                value={doorValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setDoorValue(newValue)
                  updateCarToSend({ ...carToSend, doorCount: newValue})
                }}
              />
          </div>
        </div>

        <div className="edit-car-details-section">
          <div className="edit-car-details-tile">
              <p>Miles</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.miles} 
                value={milesValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setMilesValue(newValue)
                  updateCarToSend({ ...carToSend, miles: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>Colour</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.colour} 
                value={colourValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setColourValue(newValue)
                  updateCarToSend({ ...carToSend, colour: newValue})
                }}
              />
          </div>
        </div>

        <div className="edit-car-details-section">
          <div className="edit-car-details-tile">
              <p>Transmission</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.transmission} 
                value={transmissionValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setTransmissionValue(newValue)
                  updateCarToSend({ ...carToSend, transmission: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>Fuel</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.fuelType} 
                value={FuelValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setFuelValue(newValue)
                  updateCarToSend({ ...carToSend, fuelType: newValue})
                }}
              />
          </div>
        </div>

        <div className="edit-car-details-section">
          <div className="edit-car-details-tile">
              <p>Tank (L)</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.tankCapacity} 
                value={tankValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setTankValue(newValue)
                  updateCarToSend({ ...carToSend, tankCapacity: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>MPG</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.milesPerGallon} 
                value={mpgValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setMpgValue(newValue)
                  updateCarToSend({ ...carToSend, milesPerGallon: newValue})
                }}
              />
          </div>
        </div>

          <div className="edit-car-details-tile edit-car-description-section">
            <p>Description</p>
            <textarea 
                type="text" 
                className="edit-car-details-input" 
                placeholder={carSelected.description}
                value={descValue} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  setDescValue(newValue)
                  updateCarToSend({ ...carToSend, description: newValue})
                }}
            />
            
          </div>

      </div>
    </div>
  );
}

export default EditCarPage;