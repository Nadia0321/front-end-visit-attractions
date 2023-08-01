import React from "react";
import './Attraction.css'
import { } from 'react-icons/fa'
import SearchBar from "./SearchBar";

const Attraction = ({ id, image, name, likes, dislike, onLikeClick, onDislikeClick, favorite, onFavoriteClick, onHandleSubmitAttr }) => {
    let favirireIcon = favorite ? '💙' : '🤍'

    return (
        <div>

            <div className="attr-container">
                <div className="image-container">
                    {image}
                    <div className="comment">comment</div>
                    <button className="like" onClick={() => onLikeClick(id)}>like: {likes} </button>
                    <button className="dislike" onClick={() => onDislikeClick(id)}>dislike: {dislike} </button>
                    <button onClick={() => onFavoriteClick(id)}>{favirireIcon}</button>
                </div>
                <h4>
                    {name}
                </h4>
            </div >
        </div>
    )
}

export default Attraction