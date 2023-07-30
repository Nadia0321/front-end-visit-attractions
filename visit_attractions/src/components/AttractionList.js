import React from "react";
import Attraction from "./Attraction";


const AttractionList = ({ attrData, onLikeClick }) => {
    const getAttrListJSX = (attrData) => {
        return attrData.map((attr) => {
            return (
                <Attraction
                    id={attr.id}
                    image={attr.image}
                    name={attr.name}
                    likes={attr.likes}
                    dislikes={attr.dislikes}
                    onLikeClick={onLikeClick} />
            )
        })
    }

    return (
        <section>{getAttrListJSX(attrData)}</section>

    )

}

export default AttractionList