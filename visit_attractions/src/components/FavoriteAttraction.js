import React from "react";
import './ProfilePage.css'
import './UserPost.css'
import { Delete } from '@mui/icons-material'



const FavoriteAttractions = ({ id, name, image }) => {


    return (
        <section className="attraction-container favorite-item">
            <h5 className="attr-container">
                {name}
            </h5>
            <div className="image-container">

                <img className='image' src={image} alt="" width="250px" height="200px" ></img>
                {/* <Delete className='delete-btn' fontSize="large" /> */}
            </div>
        </section>
    )

}
export default FavoriteAttractions