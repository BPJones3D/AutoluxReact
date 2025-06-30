import './Filters.css';

function FilterSearchBar({ label}) {
    return (
        <div className="filter-option-container">
            <label>{label}</label>          
            <input 
                type="text"
                placeholder="Search by name..."
                className="search-input"
            />
        </div>
    );
}
export default FilterSearchBar;