import './Filters.css';

function FilterSearchBar({ label, onChange }) {
    return (
        <div className="filter-option-container">
            <label>{label}</label>          
            <input 
                type="text"
                placeholder="Search by name..."
                className="search-input"
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}
export default FilterSearchBar;