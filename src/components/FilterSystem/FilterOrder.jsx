import './Filters.css';
import { useState } from 'react'

function FilterOrder({ onChange }) {
    const [status, setStatus] = useState(true)


    return (
        <div>
            <button className="orderBtn" onClick={() => 
            setStatus(prev => {const newStatus = !prev; onChange(newStatus); return newStatus})} >
                {status === true ? 
                <img src={"./symbols/icon_vertical_align_top.png"} alt="ascending icon"></img>
                : 
                <img src={"./symbols/icon_vertical_align_bottom.png"} alt="decensing icon"></img>
                }
            </button>
        </div>
    );
}
export default FilterOrder;