import Comment from "./Comment"

const CommentList = (commentState, attID, attrData, getAllComments,) => {

    // console.log("comments:",)
    getAllComments(attID).then(res => console.log("in comList", res))

    return commentState.map((cmt) => {
        return (
            <Comment
                comment={cmt.description}
                commentState={commentState}
                attrData={attrData} />
        )

    }
    )
}

// export default CommentList