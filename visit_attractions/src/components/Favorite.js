import React from "react";

const Favorite = ({ attrData, user, onHandleFavorite, onShowAll }) => {


    const handleDisplayFavorite = () => {
        onHandleFavorite()
    };

    const showAll = () => {
        onShowAll()
    };


    return (
        <div>
            <button onClick={handleDisplayFavorite}>Favorites</button>
            <button onClick={showAll}>Show All Attractions</button>
        </div>

    )

}

export default Favorite