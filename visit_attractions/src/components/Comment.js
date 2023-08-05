import './Comment.css'
import { useState } from 'react'

const Comment = ({ attrData }) => {
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

    const handleSubmit = () => {

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <h4>Comment</h4>
                {/* <input
                    className="comment-username"
                    value={userName}
                    onChange={handleUsernameChange}
                    placeholder='Your Name'
                    required /> */}
                <input type='text' id='name' name='name' onChange={handleUserName} value={username} autoComplete='name'>Name: </input>

                <textarea
                    className="comment-text-area"
                    value={commentText}
                    onChange={handleCommentTextChange}
                    placeholder="Write your comment"
                    required></textarea>
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}

export default Comment