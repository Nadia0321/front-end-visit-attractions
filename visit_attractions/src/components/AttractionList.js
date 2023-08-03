import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import Attraction from "./Attraction";
import SearchBarAttr from "./SearchBarAttr";
import { Link } from 'react-router-dom';
import Filter from "./Filter";
// import './AttractionList.css'

const AttractionList = ({ attrData, onLikeClick, onDislikeClick, onFavoriteClick, onHandleSubmitAttr, fetchAttractions, sortData }) => {

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
            <Link to={`/`}>
                Home
            </Link>
            <section className='search-bar' >
                <SearchBarAttr onHandleSubmitAttr={onHandleSubmitAttr} />
                <Filter sortData={sortData} />
            </section>
            <section>
                {getAttrListJSX(attrData)}
            </section>
        </div>
    )
}

export default AttractionList