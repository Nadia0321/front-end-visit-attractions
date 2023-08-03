import React from "react";
import './Attraction.css'
import { } from 'react-icons/fa'
import Comment from "./Comment";

const Attraction = ({ attrData, id, image, name, likes, dislike, onLikeClick, onDislikeClick, favorite, onFavoriteClick, onHandleSubmitAttr }) => {
    let favorireIcon = favorite ? '💙' : '🤍'

    return (
        <div>

            <div className="attr-container">
                <div className="image-container">
                    {image}


                    <div className="attr-icons"></div>
                    <button className="like" onClick={() => onLikeClick(id)}>like: {likes} </button>
                    <button className="dislike" onClick={() => onDislikeClick(id)}>dislike: {dislike} </button>
                    <button className="favorite" onClick={() => onFavoriteClick(id)}>{favorireIcon}</button>
                </div>
                <h4>
                    {name}
                </h4>
            </div >
            {/* <div className="comment" onClick={null}>comment</div> */}
            <Comment attrData={attrData} />
            {/* <Comment /> */}
        </div>
    )
}

export default Attraction