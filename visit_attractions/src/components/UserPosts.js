import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Profile from "./Authentication/Profile";
import axios from "axios";
import FavoriteAttractions from "./FavoriteAttraction";
import Attraction from "./Attraction";
import DeletePost from "./DeletePost";


const UserPosts = ({ user, placeIdState }) => {
    console.log(user)
    const kBaseURL = "https://back-end-visit-attraction.onrender.com";

    const [postAttractions, setPostAttractions] = useState([]);

    const displayPosts = () => {
        return axios
            .get(`${kBaseURL}/attractions/user/${user.sub}/`)
            .then(res => {
                console.log(res.data.attractions)
                setPostAttractions(res.data.attractions)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        displayPosts();
    }, []);


    const handleDeleteAttraction = (attractionId) => {

        return axios
            .delete(`${kBaseURL}/place/${placeIdState}/attractions/${attractionId}/`)
            .then(res => setPostAttractions(prevAttractions => prevAttractions.filter(attr => attr.id !== attractionId)))
            .catch(e => console.log(e))
    }


    const getPostAttractions = () => {
        return postAttractions.map((attr) => {
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


        <div>
            <section>
                <div>{getPostAttractions()}</div>

                <DeletePost handleDeleteAttraction={handleDeleteAttraction} postAttractions={postAttractions} />
            </section>


        </div>
    )
}

export default UserPosts