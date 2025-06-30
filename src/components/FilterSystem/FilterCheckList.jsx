import './Filters.css';

function FilterCheckList({ label, options = [], onFilterChange }) {
  return (
    <div className="filter-option-container">
            <label>{label}</label>    
            <div className="checkbox-container">
                {options.map((option) => (
                    <div key={option.id}>
                        <input 
                            type="checkbox" 
                            id={option.id} 
                            onChange={() => onFilterChange(option.id)} 
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
  );
}   
export default FilterCheckList;