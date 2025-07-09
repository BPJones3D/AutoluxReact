import './Filters.css';
import React, { useState } from 'react';
   

function FilterSlider({ label, prefix = '', suffix = '' , min = 0, max = 100, step = 1, onChange}) {
    const [slider1Value, setSlider1Value] = useState(min);
    const [slider2Value, setSlider2Value] = useState(max);

    // copilot used from here - Calculate percentage positions for the sliders
    const getPercent = (value) => ((value - min) / (max - min)) * 100;

    const leftPercent = Math.min(getPercent(slider1Value), getPercent(slider2Value));
    const rightPercent = Math.max(getPercent(slider1Value), getPercent(slider2Value));

    const sliderTrackStyle = {
        background: `linear-gradient(
            to right, 
            #383532 0%, 
            #383532 ${leftPercent}%, 
            #D0CED1 ${leftPercent}%, 
            #D0CED1 ${rightPercent}%, 
            #383532 ${rightPercent}%, 
            #383532 100%
        )`
    };
    // copilot used until here

    const handleChange = (newMin, newMax) => {
        setSlider1Value(newMin);
        setSlider2Value(newMax);
        onChange(newMin, newMax);
    };

    return (
        <div className="filter-option-container">
            <label>{label}</label>          
            <div className='slider-container'>
                <div className="slider-track" style={sliderTrackStyle}></div>
                <input 
                    type="range" 
                    min={min}
                    max={max}
                    value={slider1Value} 
                    id="slider-1" 
                    step={step}
                    onChange={(e) => handleChange(Number(e.target.value), slider2Value)} 
                />
                <input 
                    type="range" 
                    min={min}
                    max={max}
                    value={slider2Value} 
                    id="slider-2" 
                    step={step}
                    onChange={(e) => handleChange(slider1Value, Number(e.target.value))}
                />
            </div>
            <div className="slider-values">
                {slider1Value > slider2Value - 1 ? (  
                        <>
                            <p className='p-0 m-0'>{prefix}{slider2Value}{suffix}</p>
                            <p className='p-0 m-0'>{prefix}{slider1Value}{suffix}</p>
                        </>
                        
                    ) : (
                        <>
                            <p className='p-0 m-0'>{prefix}{slider1Value}{suffix}</p>
                            <p className='p-0 m-0'>{prefix}{slider2Value}{suffix}</p>
                        </>
                    )}

            </div>
        </div>
    );
}

export default FilterSlider;
