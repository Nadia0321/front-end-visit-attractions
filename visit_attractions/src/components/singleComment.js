// import './SingleComment.css'


const SingleComment = ({ name, comment }) => {

    return (
        <div className='comment-section'>
            <h6 >{name}</h6>
            <section>
                {comment}
            </section>
        </div>
    )

}

export default SingleComment