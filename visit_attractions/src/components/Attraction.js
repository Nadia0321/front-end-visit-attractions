import React from "react";
import { } from 'react-icons/fa'
import Comment from "./Comment";
import { useState } from "react";
import './Attraction.css'
import { ThumbUp, ThumbDown, Comment as CommentIcon, BookmarksRounded, BookmarkBorder } from "@mui/icons-material"

const Attraction = ({ id, image, name, likes, dislike, onLikeClick, onDislikeClick, favorite, description, onFavoriteClick, onHandleSubmitComment, commentData, fetchComments }) => {

    const [showModal, setShowModal] = useState(false);

    let favorireIcon = favorite ? <BookmarksRounded onClick={() => onFavoriteClick(id)} /> : <BookmarkBorder onClick={() => onFavoriteClick(id)} />


    const onCommentClick = () => {
        setShowModal(true)
        fetchComments(id)
    }


    return (
        <div class="attraction-list">
            <div class="attraction">
                <div class="attraction-body">
                    <h4>{name}</h4>
                    <p className="attraction-text">{description}</p>
                </div>

                <div className="ld flex" >
                    <div >
                        <ThumbUp onClick={() => onLikeClick(id)} /> {likes}
                    </div>
                    <div>
                        <ThumbDown onClick={() => onDislikeClick(id)} /> {dislike}
                    </div>
                </div>
                <div className="cf flex">
                    <div>
                        {favorireIcon}
                    </div>
                    <div>
                        <CommentIcon className="like" onClick={() => onCommentClick(id)} />
                    </div>
                </div>
                <div className="attraction-images">
                    <img class="img img1" src={image} alt="" />
                    {/* <img class="img img2" src={image} alt="" />
                    <img class="img img3" src={image} alt="" /> */}
                </div>

            </div >

            {showModal && (
                <div>
                    <Comment onHandleSubmitComment={onHandleSubmitComment} id={id} commentData={commentData} fetchComments={fetchComments} onClose={() => setShowModal(false)} />
                </div>
            )}
        </div>
    )
}

export default Attraction