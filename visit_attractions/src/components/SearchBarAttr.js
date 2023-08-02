import React, { useState } from "react"
import './SearchBar.css'


const SearchBarAttr = ({ onHandleSubmitAttr }) => {
    const [searchAttrState, setSearchAttrState] = useState("")

    const handleNameSearch = (event) => {
        const newSearch = event.target.value
        onHandleSubmitAttr(newSearch)
        setSearchAttrState(newSearch)
    }

    const handleSubmit = (event) => {
        // to prevent the page is rendered, because if rendered it will show the first page when we open the web app
        event.preventDefault()
        setSearchAttrState("")
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <label htmlFor="name">Search:  </label>
            <input type='text' id='name' name='name' onChange={handleNameSearch} value={searchAttrState} autoComplete='name'></input>
            <input type='submit' value='Search'></input>
        </form>
    )
}

export default SearchBarAttr