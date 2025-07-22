import './App.css';
import Banner from './components/Banner'
import CarList from './components/CarList';
import FilterMenu from './components/FilterSystem/FilterMenu';
import NavMenu from './components/NavMenu';
import CarDetailsPage from './components/CarDetailsPage';
import { useState } from 'react';

function App() {
  const [sortByValue, setSortByValue] = useState("Relevancy");
  const [orderValue, setOrderValue] = useState(true);
  const [searchValue, setSearchNameValue] = useState("");
  const [yearMinValue, setYearMinValue] = useState(0);
  const [yearMaxValue, setYearMaxValue] = useState(1000000);
  const [priceMinValue, setPriceMinValue] = useState(0);
  const [priceMaxValue, setPriceMaxValue] = useState(1000000);
  const [milesMinValue, setMilesMinValue] = useState(0);
  const [milesMaxValue, setMilesMaxValue] = useState(1000000);
  const [mpgMinValue, setMpgMinValue] = useState(0);
  const [mpgMaxValue, setMpgMaxValue] = useState(1000000);
  const [tankCapacityMinValue, setTankCapacityMinValue] = useState(0);
  const [tankCapacityMaxValue, setTankCapacityMaxValue] = useState(1000000);
  const [evRangeMinValue, setEvRangeMinValue] = useState(0);
  const [evRangeMaxValue, setEvRangeMaxValue] = useState(1000000);
  const [seatsMinValue, setSeatsMinValue] = useState(0);
  const [seatsMaxValue, setSeatsMaxValue] = useState(1000000);
  const [doorsMinValue, setDoorsMinValue] = useState(0);
  const [doorsMaxValue, setDoorsMaxValue] = useState(1000000);
  const [fuelTypeValue, setFuelTypeValue] = useState([])
  const [transmissionValue, setTransmissionValue] = useState([])
  const [brandValue, setBrandValue] = useState([])

  const sortByChange              = (newSortBy)      => {setSortByValue(newSortBy)};
  const orderChange               = (newOrder)       => {setOrderValue(newOrder)};
  const searchNameChange          = (newSearchName)  => {setSearchNameValue(newSearchName)};
  const yearHandleChange          = (newMin, newMax) => {setYearMinValue(newMin);setYearMaxValue(newMax);};
  const priceHandleChange         = (newMin, newMax) => {setPriceMinValue(newMin);setPriceMaxValue(newMax);};
  const milesHandleChange         = (newMin, newMax) => {setMilesMinValue(newMin);setMilesMaxValue(newMax);};
  const mpgHandleChange           = (newMin, newMax) => {setMpgMinValue(newMin);setMpgMaxValue(newMax);};
  const tankCapacityHandleChange  = (newMin, newMax) => {setTankCapacityMinValue(newMin);setTankCapacityMaxValue(newMax);};
  const evRangeHandleChange       = (newMin, newMax) => {setEvRangeMinValue(newMin);setEvRangeMaxValue(newMax);};
  const seatsHandleChange         = (newMin, newMax) => {setSeatsMinValue(newMin);setSeatsMaxValue(newMax);};
  const doorsHandleChange         = (newMin, newMax) => {setDoorsMinValue(newMin);setDoorsMaxValue(newMax);};
  const fuelTypeChange            = (newTypes)       => {setFuelTypeValue(newTypes)};
  const transmissionChange        = (newTransmission)=> {setTransmissionValue(newTransmission)};
  const brandChange               = (newBrand)       => {setBrandValue(newBrand)};

  const currentNavLocation = 'home'
  const [pageValue, setPageValue] = useState(currentNavLocation)
  const pageChange                = (newPage)        => {setPageValue(newPage); setCarClicked()}

  const [carClicked, setCarClicked] = useState()
  const carClickChange = (newCarClicked) => {setCarClicked(newCarClicked)}

  if(carClicked && pageValue !== "car"){
    setPageValue("car")
    window.scrollTo(0, 0) // scrolls to the top of the page when the user clicks on a car - would other wise be half way down the page if scrolled
  }


const cartest = {  // DELETE THIS LATER
    "id": "a795c786-f893-450d-1da4-08ddb188451b",
    "brand": "Ford",
    "name": "Focus ST",
    "year": 2020,
    "price": 34857,
    "miles": 34827,
    "transmission": "Manual",
    "fuelType": "Petrol",
    "tankCapacity": 52,
    "milesPerGallon": 35.3,
    "seatCount": 5,
    "doorCount": 5,
    "colour": "Red",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis quis odio ornare molestie. Ut aliquam massa et dui condimentum, eget pulvinar neque tincidunt. Proin lacus eros, interdum eu neque vitae, venenatis faucibus leo. Ut dolor nisi, suscipit eget nisl placerat, interdum iaculis risus. Donec nunc tellus, pretium in eleifend ut, mollis ac eros. In non ullamcorper purus. Donec ut nibh iaculis, bibendum nibh non, hendrerit ex. Vestibulum volutpat dolor ipsum, nec dapibus urna porta at. Ut malesuada sodales commodo. Vestibulum sit amet nisl et neque euismod finibus. Nullam condimentum elementum massa, tempus hendrerit lectus ullamcorper vitae."
}//---------------

  switch(pageValue) {
    case 'cars':
      return (
      <>
        <div className="header">
          <Banner/>
          <NavMenu
            onChange={pageChange}
            onSetPage={pageValue}
          />
        </div>
        <div className="main-content">
          <FilterMenu
            sortByValue={sortByValue}
            orderValue={orderValue}
            searchValue={searchValue}
            yearMinValue={yearMinValue}
            yearMaxValue={yearMaxValue}
            priceMinValue={priceMinValue}
            priceMaxValue={priceMaxValue}
            milesMinValue={milesMinValue}
            milesMaxValue={milesMaxValue}
            mpgMinValue={mpgMinValue}
            mpgMaxValue={mpgMaxValue}
            tankCapacityMinValue={tankCapacityMinValue}
            tankCapacityMaxValue={tankCapacityMaxValue}
            evRangeMinValue={evRangeMinValue}
            evRangeMaxValue={evRangeMaxValue}
            seatsMinValue={seatsMinValue}
            seatsMaxValue={seatsMaxValue}
            doorsMinValue={doorsMinValue}
            doorsMaxValue={doorsMaxValue}
            fuelTypeValue={fuelTypeValue}
            transmissionValue={transmissionValue}
            brandValue={brandValue}
            onOrderChange={orderChange}
            onSortByChange={sortByChange}
            onSearchNameChange={searchNameChange}
            onYearChange={yearHandleChange}
            onPriceChange={priceHandleChange}
            onMilesChange={milesHandleChange}
            onMpgChange={mpgHandleChange}
            onTankCapacityChange={tankCapacityHandleChange}
            onEvRangeChange={evRangeHandleChange}
            onSeatsChange={seatsHandleChange}
            onDoorsChange={doorsHandleChange}
            onFuelTypeChange={fuelTypeChange}
            onTransmissionChange={transmissionChange}
            onBrandChange={brandChange}
          />
          <CarList
            sortByValue={sortByValue}
            orderValue={orderValue}
            searchValue={searchValue}
            yearMinValue={yearMinValue}
            yearMaxValue={yearMaxValue}
            priceMinValue={priceMinValue}
            priceMaxValue={priceMaxValue}
            milesMinValue={milesMinValue}
            milesMaxValue={milesMaxValue}
            mpgMinValue={mpgMinValue}
            mpgMaxValue={mpgMaxValue}
            tankCapacityMinValue={tankCapacityMinValue}
            tankCapacityMaxValue={tankCapacityMaxValue}
            evRangeMinValue={evRangeMinValue}
            evRangeMaxValue={evRangeMaxValue}
            seatsMinValue={seatsMinValue}
            seatsMaxValue={seatsMaxValue}
            doorsMinValue={doorsMinValue}
            doorsMaxValue={doorsMaxValue}
            fuelTypeValue={fuelTypeValue}
            transmissionValue={transmissionValue}
            brandValue={brandValue}
            onCarClicked={carClickChange}
          />
        </div>
      </>);
    
    case 'car':
      return(
        <>
          <div className="header">
            <Banner/>
            <NavMenu 
              onChange={pageChange}
              onSetPage={pageValue}
            />
          </div>
          <CarDetailsPage 
            OnReturn={() => {setCarClicked(); setPageValue("cars")}}
            car={carClicked}
          />
        </>
      );
              
    default:
      return(
        <>
        <div className="header">
          <Banner/>
          <NavMenu 
            onChange={pageChange}
            onSetPage={pageValue}
          />
        </div>
        <div className="main-content text-center d-block pt-5">
          <p className="text-white pt-5">Sorry, the {pageValue} page is under construction.</p>
          <h1 className="text-white pb-5">Come Back Later!</h1>
        </div>
        </>
      );
  }
}

export default App;
