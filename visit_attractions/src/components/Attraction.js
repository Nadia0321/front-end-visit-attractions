import React from "react";
import './Attraction.css'
import { } from 'react-icons/fa'
import Comment from "./Comment";
import { useState } from "react";
import SingleComment from "./singleComment";

const Attraction = ({ attrData, id, image, name, likes, dislike, onLikeClick, onDislikeClick, favorite, onFavoriteClick, onHandleSubmitAttr, getAllComments }) => {

    const [showModal, setShowModal] = useState(false);
    const [commentState, setCommentState] = useState([])

    let favorireIcon = favorite ? '💙' : '🤍'

    const onCommentClick = () => {
        setShowModal(true)
        // getAllComments(id).then((res) => setCommentState(res))
        // )
        // getAllComments(id)
        getAllComments(id).then(res => {
            setCommentState(res); // Update comment state with fetched comments
        });

    }

    const displayComments = () => {
        getAllComments(id).then(res => {
            return (res.map((cmt) => {
                console.log(cmt)
                return (
                    <SingleComment
                        // username={ }
                        comment={cmt}
                    />
                )

                // return setCommentState(cmt)
            }))
        })
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
                    {/* attraction name */}
                    {name}
                </h4>
            </div >

            {showModal ? (
                <div>
                    <div onClick={closeModal}>✖</div>
                    <Comment attrData={attrData} commentState={commentState} />
                    {/* {displayComments()} */}
                    <br></br>
                    {/* Render the comments */}
                    {commentState.map((cmt, index) => (
                        <div key={index}>
                            {Object.entries(cmt).map(([name, comment]) => (
                                <SingleComment key={name} name={name} comment={comment} />
                            ))}
                        </div>
                    ))}

                </div>
            ) : (
                <></>
            )}


        </div>
    )
}

export default Attraction