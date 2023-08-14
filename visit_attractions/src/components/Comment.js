import axios from 'axios'
// import './Comment.css'
import { useState } from 'react'
// import './Comment.css'
import { Close } from '@mui/icons-material'
// 1- when I write a comment the page is not rendered. I need to close comments and open it again
// 2- when one is open the other one also is updated.

const Comment = ({ onHandleSubmitComment, id, getComentJSX }) => {
    const defaultComment = {
        username: "",
        description: "",
        // attraction_id: id
    }
    // const [commentText, setCommentText] = useState('')
    const [userComment, setUserComment] = useState(defaultComment)
    const [open, setOpen] = useState(false)

    const handleUserComment = (event) => {
        console.log("in comment", event.target.name, event.target.value)
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
        setUserComment(defaultComment)
    }



    return (
        <div className={`comment-section ${open ? "close" : "open"}`}>

            <form onSubmit={handleSubmit} className='form-wrapper'>
                <Close sx={{ color: '#fff' }} onClick={() => setOpen(!open)} />
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
    )
}

export default Comment