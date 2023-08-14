import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Profile from "./Authentication/Profile";
import axios from "axios";
import FavoriteAttractions from "./FavoriteAttraction";
import './UserPost.css'

import { Delete } from '@mui/icons-material'


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


    const handleDeleteAttraction = (attrID) => {

        const attractionId = attrID
        return axios
            .delete(`${kBaseURL}/attractions/delete/${attrID}/?username=${user.sub}`)
            .then(res => setPostAttractions(prevAttractions => prevAttractions.filter(attr => attr.id !== attractionId)))
            .catch(e => console.log(e))
    }


    const getPostAttractions = () => {
        return postAttractions.map((attr) => {
            return (
                <div className='favorite-items' key={attr.id}>
                    <FavoriteAttractions
                        id={attr.id}
                        image={attr.image}
                        name={attr.name}
                        handleDeleteAttraction={handleDeleteAttraction}
                    />
                    {/* <button >Delete Post</button> */}
                    <Delete className='delete-btn' onClick={() => handleDeleteAttraction(attr.id)} fontSize="large" />
                </div >)
        })
    }

    return (
        <div>
            <section>
                <div>{getPostAttractions()}</div>
            </section>
        </div>
    )
}

export default UserPosts