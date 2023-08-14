import React, { useState } from "react"
import styles from './SearchBar.module.css'


const SearchBarAttr = ({ onHandleSubmitAttr }) => {
    const [searchAttrState, setSearchAttrState] = useState("")

    const handleNameSearch = (event) => {
        const newSearch = event.target.value;
        onHandleSubmitAttr(newSearch)
        setSearchAttrState(newSearch)
    }


    return (
        <form className="search" >

            <input
                className={styles.searchInput}
                placeholder="search..."
                type='text'
                id='name'
                name='name'
                onChange={handleNameSearch}
                value={searchAttrState}
                autoComplete='name'></input>
        </form>
    )
}

export default SearchBarAttr







// const getAllPlaces = () => {
//     return axios
//         .get(`${kBaseURL}/places`)
//         .then(response => { return response.data })
//         .catch(error => { console.log(error) })
// }

// const fetchPlaces = () => {
//     getAllPlaces()
//         .then((places) => {
//             setPlaceData(places.places)
//             setUnmodifiedPlaceData(places.places)
//         });
// };


// const convertAttrFromAPI = (apiPlaces) => {
//     const { id, name, likes, dislike, description, favorite, place_id } = apiPlaces;
//     const newPlaces = { id, name, likes, dislike, description, favorite, placeID: place_id };
//     return newPlaces
// }