import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteAttractions from "./FavoriteAttraction";
import UserPosts from "./UserPosts";
import './ProfilePage.css'
const kBaseURL = "https://back-end-visit-attraction.onrender.com";



const ProfilePage = ({ user, placeIdState }) => {
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

    return (
        <div className="profile">
            <h2>Favorite Attractions</h2>
            <section className="parent-favorite">{getfavoriteAttractions()}</section>
            <h2>User Posts</h2>
            <section>
                <UserPosts user={user} placeIdState={placeIdState} />
            </section>
        </div>
    )
}

export default ProfilePage