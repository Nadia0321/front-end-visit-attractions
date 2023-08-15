import './SingleComment.css'


const SingleComment = ({ name, comment }) => {

    return (
        <div className='single-comment'>
            <h6 className='user-comment-name'>{name}</h6>
            <section>
                {comment}
            </section>
        </div>
    )

}

export default SingleComment