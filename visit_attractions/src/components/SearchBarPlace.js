import React, { useState } from "react"
import styles from './SearchBar.module.css'

const SearchBarPlace = ({ onHandleSubmitPlace }) => {
    const [searchPlaceState, setSearchPlaceState] = useState("")

    const handleNameSearch = (event) => {
        const newSearch = event.target.value
        onHandleSubmitPlace(newSearch)
        setSearchPlaceState(newSearch)
    }

    const handleSubmit = (event) => {
        // to prevent the page is rendered, because if rendered it will show the first page when we open the web app
        event.preventDefault()
        setSearchPlaceState("")
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                className={styles.searchInput}
                placeholder="search..."
                type='text'
                name='name'
                onChange={handleNameSearch}
                value={searchPlaceState}
                autoComplete='name'></input>
        </form>
    )
}

export default SearchBarPlace