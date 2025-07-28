import './EditNewCarPage-module.css';
import { useState, setState, use } from 'react';

function NewCarPage({onSaveBtnPressed, OnReturn}) {
  
  const carNew = {
    "brand": "New",
    "name": "Car",
    "year": 2020,
    "price": 9999,
    "miles": 9999,
    "transmission": "Manual",
    "fuelType": "Petrol",
    "tankCapacity": 99,
    "milesPerGallon": 99,
    "seatCount": 9,
    "doorCount": 9,
    "colour": "Red",
    "description": ""
}

  const [carToSend, setCarToSend] = useState(carNew);

  const updateCarToSend = (newCarDetails) => {setCarToSend(newCarDetails)};

  const postCar = async (carToPost) => {
      try {
          const response = await fetch(`https://localhost:44357/api/car`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(carToSend),
          });

          if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log("Posted car:", result);
          window.location.reload();
      } catch (error) {
          //alertUser("CAR POST FAILED - Something went wrong...");
          console.error("Error posting car:", error);
      }
  };


  return (
    <div className="container edit-car-container">
      
      <div className="edit-car-page">

        <div className="edit-car-details-section car-image-edit-section">
          <img 
            className="edit-car-image" 
            src={`./carImages/missing_car_image_3x2_720x480.png`} 
            alt={"new car img"} 
          />
        </div>

        <div className="edit-car-details-section main-edit-section">
          <div className="edit-car-details-header">
            <h2 className="text-white"><b>Add Car</b></h2>
            <div className="buttons">
              <button onClick={() => OnReturn()}>
                  <img src={'./symbols/icon_cancel_1.png'} alt="cancel"></img>
              </button>
              <button onClick={() => {onSaveBtnPressed(); postCar(carNew);}}>
                  <img src={'./symbols/icon_save_1.png'} alt="save"></img>
              </button>       
            </div>
          </div>
          
          <div className="edit-car-details-main-details">
            <div className="edit-car-details-tile">
              <p>Brand</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"brand"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, brand: newValue})
                }}
              />
            </div>
            
            <div className="edit-car-details-tile">
              <p>Model</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"model"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, name: newValue})
                }}
              />
            </div>

            <div className="edit-car-details-tile">
              <p>Year</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"year"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, year: newValue})
                }}
              />
            </div>
            
            <div className="edit-car-details-tile">
              <p>Price</p>
              <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"price"} 
                onChange={(e) => {
                  const newValue = e.target.value;
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
                placeholder={"0"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, seatCount: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>Doors</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"0"} 
                onChange={(e) => {
                  const newValue = e.target.value;
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
                placeholder={"0"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, miles: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>Colour</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"colour"} 
                onChange={(e) => {
                  const newValue = e.target.value;
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
                placeholder={"transmission"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, transmission: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>Fuel</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"fuel type"} 
                onChange={(e) => {
                  const newValue = e.target.value;
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
                placeholder={"0.0"} 
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, tankCapacity: newValue})
                }}
              />
          </div>

          <div className="edit-car-details-tile">
            <p>MPG</p>
            <input 
                type="text" 
                className="edit-car-details-input" 
                placeholder={"0.0"} 
                onChange={(e) => {
                  const newValue = e.target.value;
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
                placeholder={"Description..."}
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateCarToSend({ ...carToSend, description: newValue})
                }}
            />
            
          </div>

      </div>
    </div>
  );
}

export default NewCarPage;