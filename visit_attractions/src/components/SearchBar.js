import React, { useState } from "react"
import './SearchBar.css'


const SearchBar = ({ onHandleSubmitAttr }) => {
    const [placeState, setPllaceState] = useState("")

    const handleNameSearch = (event) => {
        setPllaceState(event.target.value)
    }

    const handleSubmit = (event) => {
        // to prevent the page is rendered
        event.preventDefault()
        console.log('its working')
        setPllaceState("")
    }

    return (
        <form className="search" onSubmit={onHandleSubmitAttr}>
            <label htmlFor="name">Search  </label>
            <input type='text' id='name' name='name' onChange={handleNameSearch} value={placeState}></input>
            <input type='submit' value='Search'></input>
        </form>
    )
}

export default SearchBar