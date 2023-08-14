import { useState } from "react";
import './Filter.css'


const Filter = ({ attrData, sortData }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        const selectOption = event.target.value;
        // console.log(selectOption)
        setSelectedValue(selectOption)
        sortData(selectOption)
    }

    return (
        <div>
            <select className="filter" value={selectedValue} onChange={handleSelectChange}>
                <option>Filter</option>
                <option>Alphabetical</option>
                <option>Popular</option>
            </select>
        </div>
    )
}
export default Filter