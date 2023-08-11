import React from "react";
import './Attraction.css'
import { } from 'react-icons/fa'
import Comment from "./Comment";
import { useState } from "react";
import SingleComment from "./singleComment";



const Attraction = ({ id, image, name, likes, dislike, onLikeClick, onDislikeClick, favorite, description, onFavoriteClick, onHandleSubmitComment, commentData, fetchComments }) => {

    const [showModal, setShowModal] = useState(false);

    let favorireIcon = favorite ? '💙' : '🤍'


    const onCommentClick = () => {
        setShowModal(true)
        fetchComments(id)
    }


    const getComentJSX = () => {
        console.log("in Attraction", commentData)
        return commentData.map((cmt) => {
            return (
                <SingleComment
                    name={cmt.name}
                    comment={cmt.comment}
                />
            )
        })
    }


    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>

            <div className="attr-container"><h4>
                {/* attraction name */}
                {name}
            </h4>
                <div className="image-container">

                    <div>
                        <img src={image} alt="" width="200px" height="150px" ></img>
                    </div>

                    <div className="attr-icons"></div>

                    <button className="like" onClick={() => onLikeClick(id)}>like: {likes} </button>
                    <button className="dislike" onClick={() => onDislikeClick(id)}>dislike: {dislike} </button>
                    <button className="favorite" onClick={() => onFavoriteClick(id)}>{favorireIcon}</button>
                    <button className="comment" onClick={() => onCommentClick(id)}>comment</button>
                </div>
                <p>{description}</p>

            </div >

            {showModal ? (
                <div>
                    <div onClick={closeModal}>✖</div>
                    <Comment onHandleSubmitComment={onHandleSubmitComment} id={id} commentData={commentData} />
                    <div>{getComentJSX()}</div>

                </div>
            ) : (
                <></>
            )}


        </div>
    )
}

export default Attraction