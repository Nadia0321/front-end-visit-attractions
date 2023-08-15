import React from "react";
import './ProfilePage.css'
import './UserPost.css'



const FavoriteAttractions = ({ id, name, image }) => {
    return (
        <section className="attraction-container favorite-item">
            <h4 className="attr-container">
                {name}
            </h4>
            <div className="image-container">
                <img className='image' src={image} alt="" width="250px" height="200px" ></img>
            </div>
        </section>
    )
}
export default FavoriteAttractions