import React from "react";
import Place from "./Place";

const PlaceList = ({ placeData }) => {

    const getPlaceListJSX = (data) => {
        return data.map((place) => {
            return (
                <Place
                    placeID={place.placeID}
                    name={place.name}
                    image={place.image}
                    description={place.description}
                    country={place.country}
                    state={place.state}
                    userID={place.userID}
                />
            )

        });
    }

    return (
        <div className="Placelist-container">
            {getPlaceListJSX(placeData)}
        </div>
    )

}
export default PlaceList