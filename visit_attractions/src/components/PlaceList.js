import React from "react";
import Place from "./Place";
import styles from './PlaceList.module.css'
import Filter from "./Filter";


const PlaceList = ({ placeData, onHandleSubmitPlace, onPostPlaces, user, isAuthenticated, sortData }) => {

    const getPlaceListJSX = () => {
        return placeData.map((place) => {
            return (
                <Place
                    key={place.id}
                    placeID={place.id}
                    name={place.name}
                    image={place.image}
                    description={place.description}
                    country={place.country}
                    state={place.state}
                    onHandleSubmitPlace={onHandleSubmitPlace}

                />
            )

        });
    }

    return (
        <div className="body">

            <div className={styles.placeList}>
                {getPlaceListJSX()}
            </div>
            <br /><br />
        </div>
    )

}
export default PlaceList