import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Attraction from "./Attraction";
import SearchBarAttr from "./SearchBarAttr";
import { Link } from 'react-router-dom';
import Filter from "./Filter";
import AddAttraction from "./AddAttraction";
import GoogleMaps from "./Mappp"
import Profile from "./Authentication/Profile";
import axios from "axios";
import Favorite from "./Favorite";
import styles from './AttractionList.module.css'
import NavBar from "./NavBar";


const AttractionList = ({ attrData, onLikeClick, onDislikeClick, onFavoriteClick, onHandleSubmitAttr, fetchAttractions, sortData, getAllComments, onHandleSubmitComment, fetchComments, commentData, onPostAttr, placeIdState, user, isAuthenticated, onHandleFavorite, onShowAll }) => {

    const params = useParams()
    const [locationData, setLocationData] = useState([]);


    const getAttrListJSX = (attrData) => {
        return attrData.map((attr) => {
            return (
                <Attraction
                    id={attr.id}
                    image={attr.image}
                    name={attr.name}
                    likes={attr.likes}
                    key={attr.id}
                    dislike={attr.dislike}
                    description={attr.description}
                    onLikeClick={onLikeClick}
                    onDislikeClick={onDislikeClick}
                    favorite={attr.favorite}
                    onFavoriteClick={onFavoriteClick}
                    getAllComments={getAllComments}
                    onHandleSubmitComment={onHandleSubmitComment}
                    commentData={commentData}
                    fetchComments={fetchComments}
                />
            )
        })
    }


    useEffect(() => {
        const id = params.id
        fetchAttractions(id)

    }, [])

    const getLanLon = async placeName => {
        const response = await axios
            .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json', {
                params: {
                    // key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
                    key: 'pk.65c62f8c63c53e4f90ebca457edbc4f7',
                    q: placeName,
                    format: 'JSON',
                },
            }).catch((error) => {
                console.error('Error fetching location:', error);
                throw error;
            })
        const { lat: latitudeStr, lon: longitudeStr } = response.data[0]
        const lat = parseFloat(latitudeStr);
        const lng = parseFloat(longitudeStr);
        return { lat, lng };
    }




    const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

    const lookupPlaces = async () => {
        const result = [];
        let defaultLocations = [];
        attrData.forEach((attr) => {
            defaultLocations.push(attr.name);
        });

        for (const place of defaultLocations) {
            result.push(await getLanLon(place));
            await wait(1000);
        }
        return result;
    };

    // useEffect(() => {
    //     lookupPlaces().then(result => {
    //         setLocationData(result);
    //     });
    // }, [attrData]);




    return (
        <div>

            <section className={styles.attraction_container}>
                {getAttrListJSX(attrData)}
            </section>


            {/* <GoogleMaps location={location} /> */}
            {/* {loading ? (
                <p>Loading...</p>
            ) : ( */}
            {/* {locationData.length > 0 &&
                <GoogleMaps location={locationData} />
            } */}
        </div>
    )
}



export default AttractionList