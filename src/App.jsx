import './App.css';
import Banner from './components/Banner'
import CarList from './components/CarList';
import FilterMenu from './components/FilterSystem/FilterMenu';
import NavMenu from './components/NavMenu';
import { useState } from 'react';

function App() {
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


  return (
    <>
      <div className="header">
        <Banner/>
        <NavMenu/>
      </div>
      <div className="main-content">
        <FilterMenu
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
        />
      </div>
    </>
  );
}

export default App;
