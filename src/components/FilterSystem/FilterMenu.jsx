import FilterCheckList from './FilterCheckList';
import FilterDropDown from './FilterDropDown';
import './FilterMenu-module.css';
import FilterSearchBar from './FilterSearchBar';
import FilterSlider from './FilterSlider';

function FilterMenu() {
  return (
    <div className="filter-menu-container">
      <h2 className="filter-title">Filters</h2>
      <hr className="filter-divider" />
      {/* add Sort by filter */}
      {/* add Search name bar */}
      {/* add double filter - transmission & fuel type */}
      {/* get all min/max's from database */}
      <FilterDropDown label="SORT BY" options={[
          { value: 'option1', label: 'Relevancy' },
          { value: 'option2', label: 'Price: Low to High' },
          { value: 'option3', label: 'Price: High to Low' },
          { value: 'option4', label: 'Year: Low to High' },
          { value: 'option5', label: 'Year: High to Low' },
          { value: 'option6', label: 'Miles: Low to High' },
          { value: 'option7', label: 'Miles: High to Low' },
          { value: 'option8', label: 'MPG: Low to High' },
          { value: 'option9', label: 'MPG: High to Low' },
      ]}/>
      <FilterSearchBar label="SEARCH BY NAME"/>
      <div className="double-filter-container">
        <FilterCheckList label="TRANSMISSION" flex ="double" options={[
          { id: 'filter1', label: 'Manual', checked: false },
          { id: 'filter2', label: 'Automatic', checked: false },
          { id: 'filter3', label: 'EV', checked: false },
          ]} onFilterChange={(id) => console.log(`Filter changed: ${id}`)}
        />
        <FilterCheckList label="FUEL TYPE" flex ="double" options={[
          { id: 'filter4', label: 'Petrol', checked: false },
          { id: 'filter5', label: 'Diesel', checked: false },
          { id: 'filter6', label: 'Electric', checked: false },
          ]} onFilterChange={(id) => console.log(`Filter changed: ${id}`)}
        />
      </div>
      <FilterSlider label="YEAR" prefix="" suffix="" min={1980} max={2025} step={1}/>
      <FilterSlider label="PRICE" prefix="£" suffix="" min={0} max={100000} step={1000}/>
      <FilterSlider label="MILES" prefix="" suffix=" Miles" min={0} max={120000} step={1000}/>
      <FilterSlider label="MPG" prefix="" suffix=" MPG" min={10} max={80} step={1}/>
      <FilterSlider label="TANK CAPACITY" prefix="" suffix="L" min={10} max={80} step={1}/>
      <FilterSlider label="EV RANGE" prefix="" suffix="Mi" min={100} max={400} step={10}/>
      <div className="double-filter-container">
        <FilterSlider label="SEATS" prefix="" suffix="" min={1} max={10} step={1}/>
        <FilterSlider label="DOORS" prefix="" suffix="" min={1} max={10} step={1}/>
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
        ]} onFilterChange={(id) => console.log(`Filter changed: ${id}`)}
      />
    </div>
  );

}
export default FilterMenu;