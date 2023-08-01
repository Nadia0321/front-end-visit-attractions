import React, { useState } from "react"
import './SearchBar.css'


const SearchBar = ({ onHandleSubmitPlace }) => {
    const [searchPlaceState, setSearchPlaceState] = useState("")

    const handleNameSearch = (event) => {
        setSearchPlaceState(event.target.value)
    }

    const handleSubmit = (event) => {
        // to prevent the page is rendered, because if rendered it will show the first page when we open the web app
        event.preventDefault()
        onHandleSubmitPlace(searchPlaceState)
        setSearchPlaceState("")
    }





    return (
        <form className="search" onSubmit={handleSubmit}>
            <label htmlFor="name">Search  </label>
            <input type='text' id='name' name='name' onChange={handleNameSearch} value={searchPlaceState} autoComplete='name'></input>
            <input type='submit' value='Search'></input>
        </form>
    )
}

export default SearchBar