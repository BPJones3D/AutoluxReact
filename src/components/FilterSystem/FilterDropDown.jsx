import './Filters.css';

function FilterDropDown({ label , options = [] }) {
    return (
        <div className="filter-option-container">
            <label>{label}</label>          
            <select className="sort-by-dropdown">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default FilterDropDown;

