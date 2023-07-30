import React from "react";
import './Attraction.css'

const Attraction = ({ id, image, name, likes, dislike, onLikeClick }) => {

    return (
        <div className="attr-container">
            <div className="image-container">
                {image}
                <div className="comment">comment</div>
                <button className="like" onClick={() => onLikeClick(id)}>like: {likes} </button>
                <div>favorite</div>
            </div>
            <h4>
                {name}
            </h4>
        </div >
    )
}

export default Attraction