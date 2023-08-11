import React, { useState } from "react";
import Place from "./Place";
import SearchBarPlace from "./SearchBarPlace";
import './PlaceList.css'
import LoginButton from "./Authentication/LoginButton";
import LogoutButton from "./Authentication/LogoutButton";
import Profile from "./Authentication/Profile";
import AddPlace from "./AddPlace";
import { Link } from "react-router-dom";




const PlaceList = ({ placeData, onHandleSubmitPlace, onPostPlaces, user, isAuthenticated }) => {
    const [showAddPlaceForm, setShowAddPlaceForm] = useState(false);

    const toggleAddPlaceForm = () => {
        setShowAddPlaceForm(!showAddPlaceForm);
    }

    const closeAddPlaceForm = () => {
        setShowAddPlaceForm(!showAddPlaceForm);
    }

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
            <Link to={`/profile`}>
                Profile
            </Link>
            {/*             
            <Link to={`/login`}>
                Login
            </Link>
            <Link to={`/signUp`}>
                Sign up
            </Link> */}

            <Profile onPostPlaces={onPostPlaces} user={user} isAuthenticated={isAuthenticated} />
            <LoginButton user={user} />
            <LogoutButton user={user} />
            <section className="tab-container">
                <SearchBarPlace onHandleSubmitPlace={onHandleSubmitPlace} />

            </section>
            <div className="Placelist-container">
                {getPlaceListJSX()}
            </div>
            <br /><br />
            {isAuthenticated && (
                <div>

                    <button onClick={toggleAddPlaceForm}> Add Place</button>
                    {showAddPlaceForm && (
                        <div>
                            <p onClick={closeAddPlaceForm}>X</p>
                            <AddPlace onPostPlaces={onPostPlaces} />
                        </div>)}
                </div>

            )}
        </div>
    )

}
export default PlaceList