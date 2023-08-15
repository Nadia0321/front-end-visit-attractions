import React from "react";
import './Favorite.css'
import { Bookmark, PhotoCamera } from '@mui/icons-material'

const Favorite = ({ attrData, user, onHandleFavorite, onShowAll }) => {


    const handleDisplayFavorite = () => {
        onHandleFavorite()
    };

    const showAll = () => {
        onShowAll()
    };


    return (
        <div >

            <div className="icon-wrapper"><Bookmark onClick={handleDisplayFavorite} />Favorite</div>
            <div className="icon-wrapper"><PhotoCamera onClick={showAll} />Show All Attractions</div>
            <div></div>
            {/* <button >Favorites</button>
            <button </button> */}
        </div >

    )

}

export default Favorite