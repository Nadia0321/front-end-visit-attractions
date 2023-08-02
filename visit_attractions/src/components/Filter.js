import { useState } from "react";

const Filter = ({ attrData, sortData }) => {
    const [selectedValue, setSelectedValue] = useState('');


    const handleSelectChange = (event) => {
        const selectOption = event.target.value;
        // console.log(selectOption)
        setSelectedValue(selectOption)
        sortData(selectOption)
    }



    // const sortCards = (sortDirection, cards) => {
    //     if (sortDirection === 'Alphabetical')
    //         return cards.sort((a, b) => a.message > b.message);
    //     if (sortDirection === 'Likes')
    //         return cards.sort((a, b) => a.likesCount < b.likesCount);
    //     if (sortDirection === 'ID') return cards.sort((a, b) => a.id > b.id);
    // };
    return (
        <div>
            {/* <p>
                Filter
            </p> */}
            <select className="filter" value={selectedValue} onChange={handleSelectChange}>
                Filter
                <option></option>
                <option>Alphabetical</option>
                <option>Popular</option>
                {/* <option>Popular</option> */}
            </select>
        </div>



    )

}
export default Filter