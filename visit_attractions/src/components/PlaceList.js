import React from "react";
import Place from "./Place";
import SearchBar from "./SearchBar";

const PlaceList = ({ placeData, onHandleSubmitPlace, onHandleAttractions }) => {

    const getPlaceListJSX = () => {
        return placeData.map((place) => {
            return (
                <Place
                    key={place.id}
                    placeID={place.id}
                    name={place.name}
                    // image={place.image}
                    description={place.description}
                    country={place.country}
                    state={place.state}
                    // userID={place.userID}
                    onHandleSubmitPlace={onHandleSubmitPlace}
                    onHandleAttractions={onHandleAttractions}
                />
            )

        });
    }

    return (
        <div>
            <header>
                <SearchBar onHandleSubmitPlace={onHandleSubmitPlace} />
            </header>
            <div className="Placelist-container">
                {getPlaceListJSX()}
            </div>
        </div>
    )

}
export default PlaceList