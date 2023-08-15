import axios from 'axios'
// import './Comment.css'
import { useState } from 'react'
// import './Comment.css'
import { Close } from '@mui/icons-material'
// 1- when I write a comment the page is not rendered. I need to close comments and open it again
// 2- when one is open the other one also is updated.
import SingleComment from './singleComment'


const Comment = ({ onHandleSubmitComment, id, commentData, fetchComments, onClose }) => {

    const defaultComment = {
        username: "",
        description: "",
    }

    const [userComment, setUserComment] = useState(defaultComment)
    const [open, setOpen] = useState(false)
    // const [showModal, setShowModal] = useState(false);

    const toggleCommentSection = () => {
        setOpen(!open)
        onClose()
    };




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




    const handleUserComment = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newFormData = { ...userComment, [fieldName]: fieldValue }
        setUserComment(newFormData)
    }


    // const handleCommentTextChange = (event) => {
    //     const newComment = event.target.value;
    //     setCommentText(newComment)
    // }


    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            username: userComment.username,
            description: userComment.description,
            // attraction_id: id

        }
        onHandleSubmitComment(id, newComment)
        // setShowModal(true)
        fetchComments(id)
        toggleCommentSection()
        setUserComment(defaultComment)
    }


    const closeModal = () => {
        setOpen(false)
        onClose()
        // setShowModal(false);
    };


    return (
        <div className={`comment-section ${open ? "open" : "close"}`}>

            <div>
                <form onSubmit={handleSubmit} className='form-wrapper'>
                    <Close sx={{ color: '#fff' }} onClick={closeModal} />
                    <div>
                        <input placeholder="Write your name" type='text' id='username' name='username' onChange={handleUserComment} value={userComment.username} autoComplete='username' className='comment-area'></input>
                    </div>
                    <div>
                        <input placeholder="Write your comment" type='text' id='description' name='description' onChange={handleUserComment} value={userComment.description} autoComplete='description' className='comment-area'></input>
                    </div>
                    {/* <textarea
                    placeholder="Write your comment"
                        className="comment-text-area"
                        value={userComment.comment}
                        onChange={handleUserComment}
                        placeholder="Write your comment"
                        required></textarea> */}
                    <div><input type="submit" value="submit" className='submit-btn'></input></div>
                </form>
                {getComentJSX()}
            </div>
            {/* {showModal ? (
                <div>

                </div>
            ) : (
                <></>
            )} */}


        </div>
    )
}

export default Comment