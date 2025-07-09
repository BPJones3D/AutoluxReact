import { useState } from 'react';
import './Filters.css';

function FilterCheckList({ label, options = [], onChange }) {
    const [checklistValues, setChecklistValues] = useState([])

    const handleChange = (type, value) =>{
    
        if (value === true){
            if (!checklistValues.some(item => item.type === type)){
                setChecklistValues(prev => [...prev, { type }])
            }
        } else {
            if (checklistValues.some(item => item.type === type)){
                setChecklistValues(prev => prev.filter(item => item.type !== type))
            }
        }        
    }
    
    return (
        <div className="filter-option-container">
            <label>{label}</label>    
            <div className="checkbox-container">
                {options.map((option) => (
                    <div key={option.id}>
                        <input 
                            type="checkbox" 
                            id={option.id} 
                            onChange={e => handleChange(option.label, e.target.checked)} 
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
            {onChange(checklistValues)}
        </div>
    );
}   
export default FilterCheckList;