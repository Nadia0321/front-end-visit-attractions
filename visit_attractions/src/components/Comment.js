import axios from 'axios'
import './Comment.css'
import { useState } from 'react'

// 1- when I write a comment the page is not rendered. I need to close comments and open it again
// 2- when one is open the other one also is updated.

const Comment = ({ onHandleSubmitComment, id }) => {
    const defaultComment = {
        username: "",
        description: "",
        // attraction_id: id
    }
    // const [commentText, setCommentText] = useState('')
    const [userComment, setUserComment] = useState(defaultComment)

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
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <input placeholder="Write your name" type='text' id='username' name='username' onChange={handleUserComment} value={userComment.username} autoComplete='username'></input>
                </div>
                <div>
                    <input placeholder="Write your comment" type='text' id='description' name='description' onChange={handleUserComment} value={userComment.description} autoComplete='description'></input>
                </div>

                {/* <textarea
                    className="comment-text-area"
                    value={userComment.comment}
                    onChange={handleUserComment}
                    placeholder="Write your comment"
                    required></textarea> */}

                <div><input type="submit" value="submit"></input></div>
            </form>

        </div>
    )
}

export default Comment