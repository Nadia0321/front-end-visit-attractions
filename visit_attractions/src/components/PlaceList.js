import React, { useState } from "react";
import Place from "./Place";
import SearchBarPlace from "./SearchBarPlace";
import styles from './PlaceList.module.css'
import LoginButton from "./Authentication/LoginButton";
import LogoutButton from "./Authentication/LogoutButton";
import Profile from "./Authentication/Profile";
import AddPlace from "./AddPlace";
import { Link } from "react-router-dom";
import styles2 from './Authentication/Btns.module.css'



const PlaceList = ({ placeData, onHandleSubmitPlace, onPostPlaces, user, isAuthenticated }) => {

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
                    // userID={place.userID}
                    onHandleSubmitPlace={onHandleSubmitPlace}
                // onPostPlaces={onPostPlaces}

                />
            )

        });
    }

    return (
        <div className="body">
            {/* <Link to={`/profile`}>
                Profile
            </Link> */}



            <div className={styles.placeList}>
                {getPlaceListJSX()}
            </div>
            <br /><br />

        </div>
    )

}
export default PlaceList