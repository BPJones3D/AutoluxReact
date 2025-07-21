import FilterCheckList from './FilterCheckList';
import FilterDropDown from './FilterDropDown';
import './FilterMenu-module.css';
import FilterSearchBar from './FilterSearchBar';
import FilterSlider from './FilterSlider';
import {useState} from 'react';

function FilterMenu({
  onSortByChange,
  onOrderChange,
  onSearchNameChange,
  onYearChange, 
  onPriceChange, 
  onMilesChange, 
  onMpgChange, 
  onTankCapacityChange, 
  onEvRangeChange,
  onSeatsChange,
  onDoorsChange,
  onFuelTypeChange,
  onTransmissionChange,
  onBrandChange
}){

  const [sortByValue, setSortByValue] = useState("Relevancy")
  const [orderValue, setOrderValue] = useState(true)
  const [searchNameValue, setSearchNameValue] = useState("")
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
  const [fuelTypeValue, setFuelTypeValue] = useState()
  const [transmissionValue, setTransmissionValue] = useState()
  const [brandValue, setBrandValue] = useState()
  
  const sortByChange              = (newSortBy)         => {setSortByValue(newSortBy); onSortByChange(newSortBy)};
  const orderChange               = (newOrder)           => {setOrderValue(newOrder); onOrderChange(newOrder)};
  const searchNameChange          = (newSearchName)     => {setSearchNameValue(newSearchName); onSearchNameChange(newSearchName)};
  const yearHandleChange          = (newMin, newMax)    => {setYearMinValue(newMin);setYearMaxValue(newMax);onYearChange(newMin, newMax);};
  const priceHandleChange         = (newMin, newMax)    => {setPriceMinValue(newMin);setPriceMaxValue(newMax);onPriceChange(newMin, newMax);};
  const milesHandleChange         = (newMin, newMax)    => {setMilesMinValue(newMin);setMilesMaxValue(newMax);onMilesChange(newMin, newMax);};
  const mpgHandleChange           = (newMin, newMax)    => {setMpgMinValue(newMin);setMpgMaxValue(newMax);onMpgChange(newMin, newMax);};
  const tankCapacityHandleChange  = (newMin, newMax)    => {setTankCapacityMinValue(newMin);setTankCapacityMaxValue(newMax);onTankCapacityChange(newMin, newMax);};
  const evRangeHandleChange       = (newMin, newMax)    => {setEvRangeMinValue(newMin);setEvRangeMaxValue(newMax);onEvRangeChange(newMin, newMax);};
  const seatsHandleChange         = (newMin, newMax)    => {setSeatsMinValue(newMin);setSeatsMaxValue(newMax);onSeatsChange(newMin, newMax);};
  const doorsHandleChange         = (newMin, newMax)    => {setDoorsMinValue(newMin);setDoorsMaxValue(newMax);onDoorsChange(newMin, newMax);};
  const fuelTypeChange            = (newFuelTypes)      => {setFuelTypeValue(newFuelTypes); onFuelTypeChange(newFuelTypes)}
  const transmissionChange        = (newTransmissions)  => {setTransmissionValue(newTransmissions); onTransmissionChange(newTransmissions)}
  const brandChange               = (newBrands)         => {setBrandValue(newBrands); onBrandChange(newBrands)}

  return (
    <div className="filter-menu-container">
      <h2 className="filter-title">Filters</h2>
      <hr className="filter-divider" />
      {/* add Sort by filter */}
      {/* add reset filter button */}
      {/* get all min/max's from database */}
      
      <div className="double-filter-container">
        <FilterDropDown label="SORT BY" order={true} onChange={sortByChange} onOrderChange={orderChange} options={[
          { value: 'Relevancy', label: 'Relevancy' },
          { value: 'Price', label: 'Price' },
          { value: 'Year', label: 'Year' },
          { value: 'Miles', label: 'Miles' },
          { value: 'MPG', label: 'MPG' },
          { value: 'Brand', label: 'Brand'},
          { value: 'Doors', label: 'Doors'}
        ]}/>
        
      </div>

      <FilterSearchBar label="SEARCH BY NAME" onChange={searchNameChange}/>

      <div className="double-filter-container">
        <FilterCheckList label="TRANSMISSION" flex ="double" options={[
          { id: 'filter1', label: 'Manual', checked: false },
          { id: 'filter2', label: 'Automatic', checked: false },
          { id: 'filter3', label: 'EV', checked: false },
          ]} onChange={transmissionChange}
        /> 
        <FilterCheckList label="FUEL TYPE" flex ="double" options={[
          { id: 'filter4', label: 'Petrol', checked: false },
          { id: 'filter5', label: 'Diesel', checked: false },
          { id: 'filter6', label: 'Electric', checked: false },
          ]} onChange={fuelTypeChange}
        />
      </div>
      
      <FilterSlider label="YEAR" prefix="" suffix="" min={2010} max={2025} step={1} onChange={yearHandleChange}/>
      <FilterSlider label="PRICE" prefix="£" suffix="" min={0} max={100000} step={1000} onChange={priceHandleChange}/>
      <FilterSlider label="MILES" prefix="" suffix=" Miles" min={0} max={120000} step={1000} onChange={milesHandleChange}/>
      <FilterSlider label="MPG" prefix="" suffix=" MPG" min={10} max={80} step={1} onChange={mpgHandleChange}/>
      <FilterSlider label="TANK CAPACITY" prefix="" suffix="L" min={10} max={80} step={1} onChange={tankCapacityHandleChange}/>
      <FilterSlider label="EV RANGE" prefix="" suffix="Mi" min={100} max={400} step={10} onChange={evRangeHandleChange}/>
      <div className="double-filter-container">
        <FilterSlider label="SEATS" prefix="" suffix="" min={1} max={10} step={1} onChange={seatsHandleChange}/>
        <FilterSlider label="DOORS" prefix="" suffix="" min={1} max={10} step={1} onChange={doorsHandleChange}/>
      </div>
      <FilterCheckList label="BRAND" options={[
        { id: 'filter-bmw', label: 'BMW', checked: false },
        { id: 'filter-ford', label: 'Ford', checked: false },
        { id: 'filter-honda', label: 'Honda', checked: false },
        { id: 'filter-jaguar', label: 'Jaguar', checked: false },
        { id: 'filter-land-rover', label: 'Land Rover', checked: false },
        { id: 'filter-mg', label: 'MG', checked: false },
        { id: 'filter-mini', label: 'Mini', checked: false },
        { id: 'filter-nissan', label: 'Nissan', checked: false },
        { id: 'filter-subaru', label: 'Subaru', checked: false },
        { id: 'filter-vauxhall', label: 'Vauxhall', checked: false },
        ]} onChange={brandChange}
      />
    </div>
  );

}
export default FilterMenu;