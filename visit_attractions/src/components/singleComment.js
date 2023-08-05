const SingleComment = ({ comment, name }) => {
    return (
        <div>
            <h6>{name}</h6>
            <section>
                {comment}
            </section>
        </div>
    )

}

export default SingleComment