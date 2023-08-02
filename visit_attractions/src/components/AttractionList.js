import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Attraction from "./Attraction";
import SearchBar from "./SearchBarPlace";
import SearchBarAttr from "./SearchBarAttr";
import { Link } from 'react-router-dom';


const AttractionList = ({ attrData, onLikeClick, onDislikeClick, onFavoriteClick, onHandleSubmitAttr, fetchAttractions }) => {

    const params = useParams()

    const getAttrListJSX = (attrData) => {
        return attrData.map((attr) => {
            return (
                <Attraction
                    id={attr.id}
                    // image={attr.image}
                    name={attr.name}
                    likes={attr.likes}
                    key={attr.id}
                    dislike={attr.dislike}
                    onLikeClick={onLikeClick}
                    onDislikeClick={onDislikeClick}
                    favorite={attr.favorite}
                    onFavoriteClick={onFavoriteClick}
                // onHandleSubmitAttr={onHandleSubmitAttr}
                />

            )
        })
    }

    useEffect(() => {
        const id = params.id
        fetchAttractions(id)

    }, [])

    console.log("atr list", attrData)

    return (
        <div>
            <Link to={`/`}

            >
                Home

            </Link>
            <header>
                <SearchBarAttr onHandleSubmitAttr={onHandleSubmitAttr} />
            </header>
            <section>
                {getAttrListJSX(attrData)}
            </section>
        </div>

    )

}

export default AttractionList