import axios from "axios";
import React from "react";


const DeletePost = ({ handleDeleteAttraction, postAttractions }) => {


    const onDeleteClick = (attractionId) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            handleDeleteAttraction(attractionId);
        }
    };






    return (
        <div>
            <button onClick={onDeleteClick}> Delete Attraction</button>
        </div>
    )
}
export default DeletePost