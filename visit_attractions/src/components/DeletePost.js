import axios from "axios";
import React from "react";


const DeletePost = ({ handleDeleteAttraction, postAttractions }) => {


    const onDeleteClick = (attr) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            handleDeleteAttraction(attr);
        }
    };






    return (
        <div>
            <button onClick={onDeleteClick}> Delete Attraction</button>
        </div>
    )
}
export default DeletePost