import axios from 'axios'
import './Comment.css'
import { useState } from 'react'



const Comment = ({ onHandleSubmitComment }) => {
    const [commentText, setCommentText] = useState('')
    const [username, setUsername] = useState("")


    const handleUserName = (event) => {
        const username = event.target.value;
        setUsername(username)
    }


    const handleCommentTextChange = (event) => {
        const newComment = event.target.value;
        setCommentText(newComment)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername("")
        onHandleSubmitComment()
        setCommentText("")
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <input placeholder="Write your name" type='text' id='name' name='name' onChange={handleUserName} value={username} autoComplete='name'></input>
                </div>

                <textarea
                    className="comment-text-area"
                    value={commentText}
                    onChange={handleCommentTextChange}
                    placeholder="Write your comment"
                    required></textarea>

                <div><input type="submit" value="submit"></input></div>
            </form>

        </div>
    )
}

export default Comment