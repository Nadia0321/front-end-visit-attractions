import React, { useState, useEffect } from "react";
import axios from "axios";
import './UserPost.css'
import UserPostAttraction from "./UserPostAttraction";


const UserPosts = ({ user, placeIdState }) => {

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
                <div className='one-user-post' key={attr.id}>
                    <UserPostAttraction
                        id={attr.id}
                        image={attr.image}
                        name={attr.name}
                        handleDeleteAttraction={handleDeleteAttraction}
                    />
                </div >)
        })
    }


    return (
        <div>
            <section>
                <div className='favorite-items'>{getPostAttractions()}</div>
            </section>
        </div>
    )
}

export default UserPosts