
import './Comment.css'
import { useState } from 'react'
import { Close } from '@mui/icons-material'
import SingleComment from './singleComment'


const Comment = ({ onHandleSubmitComment, id, commentData, fetchComments, onClose }) => {

    const defaultComment = {
        username: "",
        description: "",
    }

    const [userComment, setUserComment] = useState(defaultComment)
    const [open, setOpen] = useState(false)

    const toggleCommentSection = () => {
        setOpen(!open)
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


    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            username: userComment.username,
            description: userComment.description,
        }

        onHandleSubmitComment(id, newComment)
        fetchComments(id)
        toggleCommentSection()
        setUserComment(defaultComment)
    }


    const closeModal = () => {
        setOpen(false)
        onClose()
    };


    return (
        <div className={`comment-section ${open ? "open" : "close"}`}>

            <div>
                <form onSubmit={handleSubmit} className='form-wrapper'>
                    <Close sx={{ color: '#fff' }} onClick={closeModal} />
                    <div>
                        <input placeholder="Write your name" type='text' id='username' name='username' onChange={handleUserComment} value={userComment.username} autoComplete='username' className='comment-area'></input>
                    </div>
                    {/* <div>
                        <input placeholder="Write your comment" type='text' id='description' name='description' onChange={handleUserComment} value={userComment.description} autoComplete='description' className='comment-area'></input>
                    </div> */}
                    <textarea
                        placeholder="Write your comment" type='text' id='description' name='description' onChange={handleUserComment} value={userComment.description} autoComplete='description' className='comment-area'></textarea>
                    <div><input type="submit" value="submit" className='submit-btn'></input></div>
                </form>
                {getComentJSX()}
            </div>
        </div>
    )
}

export default Comment