import React from "react";
import Place from "./Place";
import SearchBarPlace from "./SearchBarPlace";
import Filter from "./Filter";
import './PlaceList.css'

const PlaceList = ({ placeData, onHandleSubmitPlace }) => {

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

                />
            )

        });
    }

    return (
        <div className="body">
            <section className="tab-container">
                <SearchBarPlace onHandleSubmitPlace={onHandleSubmitPlace} />

            </section>
            <div className="Placelist-container">
                {getPlaceListJSX()}
            </div>
        </div>
    )

}
export default PlaceList