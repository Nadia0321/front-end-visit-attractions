import React from "react";
import Place from "./Place";
import SearchBarPlace from "./SearchBarPlace";
// import Filter from "./Filter";
import './PlaceList.css'
import { Link } from 'react-router-dom';
import LoginButton from "./Authentication/LoginButton";
import LogoutButton from "./Authentication/LogoutButton";
import Profile from "./Authentication/Profile";
import AddPlace from "./AddPlace";





const PlaceList = ({ placeData, onHandleSubmitPlace, onPostPlaces }) => {

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

            {/*             
            <Link to={`/login`}>
                Login
            </Link>
            <Link to={`/signUp`}>
                Sign up
            </Link> */}

            <Profile onPostPlaces={onPostPlaces} />
            <LoginButton />
            <LogoutButton />
            <section className="tab-container">
                <SearchBarPlace onHandleSubmitPlace={onHandleSubmitPlace} />

            </section>
            <div className="Placelist-container">
                {getPlaceListJSX()}
            </div>
            <br /><br />
            <div>
                <AddPlace onPostPlaces={onPostPlaces} />
            </div>

        </div>
    )

}
export default PlaceList