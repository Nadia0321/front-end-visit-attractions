import React from "react";
import './Attraction.css'
import { } from 'react-icons/fa'
import Comment from "./Comment";
import { useState } from "react";
import axios from "axios";

const Attraction = ({ attrData, id, image, name, likes, dislike, onLikeClick, onDislikeClick, favorite, onFavoriteClick, onHandleSubmitAttr }) => {

    const [showModal, setShowModal] = useState(false);

    let favorireIcon = favorite ? '💙' : '🤍'

    const onCommentClick = () => {
        setShowModal(true)

    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>

            <div className="attr-container">
                <div className="image-container">
                    {image}


                    <div className="attr-icons"></div>
                    <button className="like" onClick={() => onLikeClick(id)}>like: {likes} </button>
                    <button className="dislike" onClick={() => onDislikeClick(id)}>dislike: {dislike} </button>
                    <button className="favorite" onClick={() => onFavoriteClick(id)}>{favorireIcon}</button>
                    <button className="comment" onClick={() => onCommentClick(id)}>comment</button>
                </div>
                <h4>
                    {name}
                </h4>
            </div >

            {showModal ? (
                <div>
                    <div onClick={closeModal}>✖</div>
                    <Comment attrData={attrData} />
                </div>
            ) : (
                <></>
            )}


        </div>
    )
}

export default Attraction