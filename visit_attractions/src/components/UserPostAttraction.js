import React from "react";
import './ProfilePage.css'
import './UserPost.css'
import { Close } from '@mui/icons-material'



const UserPostAttraction = ({ id, name, image, handleDeleteAttraction }) => {

    return (
        <section className="attraction-container favorite-item">
            <h4 className="attr-container">
                {name}
            </h4>
            <div className="image-container">
                <Close className='delete-btn' onClick={() => handleDeleteAttraction(id)} fontSize="large" />
                <div className="image-wrapper">
                    <img className='image' src={image} alt="" width="250px" height="200px" ></img>
                </div>
            </div>
        </section>
    )

}
export default UserPostAttraction