import './Comment.css'
import { useState } from 'react'

const Comment = ({ attrData }) => {
    const [commentText, setCommentText] = useState('')

    const handleCommentTextChange = (event) => {
        const newComment = event.target.value;
        setCommentText(newComment)
    }




    return (
        <div>
            <form >

                <h4>Comment</h4>
                {/* <input
                    className="comment-username"
                    value={userName}
                    onChange={handleUsernameChange}
                    placeholder='Your Name'
                    required /> */}

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