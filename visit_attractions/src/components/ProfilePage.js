import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Profile from "./Authentication/Profile";
import axios from "axios";
import FavoriteAttractions from "./FavoriteAttraction";
import Attraction from "./Attraction";

const kBaseURL = "https://back-end-visit-attraction.onrender.com";
const ProfilePage = ({ attrData, userFavaroriteAttractions }) => {
    const [favoriteAttractions, setFavoriteAttractions] = useState([]);

    const displayFavorites = () => {
        return axios
            .get(`${kBaseURL}/attractions/favorites/`)
            .then(res => setFavoriteAttractions(res.data.attractions))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        displayFavorites();
    }, []);

    const getfavoriteAttractions = () => {
        return favoriteAttractions.map((attr) => {
            return (
                <FavoriteAttractions
                    id={attr.id}
                    image={attr.image}
                    name={attr.name}
                    key={attr.id}
                />)
        })
    }

    // userFavaroriteAttractions()
    return (
        <div>
            <Link to={`/`}>
                Home
            </Link>
            <div>Profile</div>
            <Profile />
            <p>Favorite Attractions</p>
            <section>{getfavoriteAttractions()}</section>
            <p>User Posts</p>
        </div>
    )
}

export default ProfilePage