import './Filters.css';
import FilterOrder from './FilterOrder';
import { useState } from 'react';

function FilterDropDown({ label , order, options = [], onChange, onOrderChange}) {
    const [orderValue, setOrderValue] = useState(true)
    const orderChange = (newOrder) => {setOrderValue(newOrder); onOrderChange(newOrder)};

    return (
        <div className="filter-option-container">
            <label>{label}</label>          
            <div className="dropDownContainer">
                <select className="sort-by-dropdown" onChange={e => onChange(e.target.value)}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                </select>
                {order === true ? <FilterOrder onChange={orderChange}/> : <></>}
            </div>
            
        </div>
    );
}
export default FilterDropDown;

