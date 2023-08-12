import React from "react";
import './Attraction.css'

const FavoriteAttractions = ({ name, image }) => {


    return (
        <section>
            <h4 className="attr-container">
                {name}
            </h4>
            <div className="image-container">
                <div>
                    <img src={image} alt="" width="200px" height="150px" ></img>
                </div>
            </div>
        </section>
    )

}
export default FavoriteAttractions