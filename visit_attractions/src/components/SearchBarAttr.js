import React, { useState } from "react"
import './SearchBar.css'


const SearchBarAttr = ({ onHandleSubmitAttr }) => {
    const [searchAttrState, setSearchAttrState] = useState("")

    const handleNameSearch = (event) => {
        const newSearch = event.target.value;
        onHandleSubmitAttr(newSearch)
        setSearchAttrState(newSearch)
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        setSearchAttrState("")
    }

    // onSubmit={handleSubmit}
    return (
        <form className="search" >
            <label htmlFor="name">Search:  </label>
            <input type='text' id='name' name='name' onChange={handleNameSearch} value={searchAttrState} autoComplete='name'></input>
        </form>
    )
}

export default SearchBarAttr