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




const AttractionList = ({ attrData, onLikeClick, onDislikeClick, onFavoriteClick, onHandleSubmitAttr, fetchAttractions, sortData, getAllComments, onHandleSubmitComment, fetchComments, commentData, onPostAttr, placeIdState, user, isAuthenticated, onHandleFavorite, onShowAll }) => {

    const params = useParams()
    const [showAddAttrForm, setShowAddAttrForm] = useState(false);
    const [loading, setLoading] = useState(true);


    const toggleAddAttrForm = () => {
        setShowAddAttrForm(!showAddAttrForm);
    }

    const closeAddAttrForm = () => {
        setShowAddAttrForm(!showAddAttrForm);
    }

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


    // =======================================================================
    const [locationData, setLocationData] = useState([]);
    console.log('attrData', attrData)
    // console.log(process.env.REACT_APP_LOCATIONIQ_API_KEY)

    const getLanLon = async placeName => {
        const response = await axios
            .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json', {
                params: {
                    key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
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
        // const defaultLocations = ['Central Park, New York City', 'Summit One Vanderbilt, New York City']
        let defaultLocations = [];
        console.log('attrData in look up', attrData)
        console.log('default2', defaultLocations)
        attrData.forEach((attr) => {
            defaultLocations.push(attr.name);
        });

        for (const place of defaultLocations) {
            result.push(await getLanLon(place));
            await wait(1000);
        }

        console.log('lookup result', result);
        return result;
    };

    useEffect(() => {
        lookupPlaces().then(result => {
            setLocationData(result);
        });
    }, [attrData]);

    // const location = [

    //     { lat: 40.782579, lng: -73.965664 }, //Central Park
    //     { lat: 40.712742, lng: -74.013382 }, // World Trade center
    // ]


    return (
        <div>
            <Link to={`/`}>
                Home
            </Link>
            <Profile user={user} isAuthenticated={isAuthenticated} />
            {isAuthenticated && (
                <div>
                    <Favorite attrData={attrData} user={user} onHandleFavorite={onHandleFavorite} onShowAll={onShowAll} />
                    <button onClick={toggleAddAttrForm}> Add attraction</button>
                    {showAddAttrForm && (
                        <div>
                            <p onClick={closeAddAttrForm}>X</p>
                            <AddAttraction onPostAttr={onPostAttr} placeIdState={placeIdState} />

                        </div>)}
                </div>

            )}
            <section className='search-bar' >
                <SearchBarAttr onHandleSubmitAttr={onHandleSubmitAttr} />
                <Filter sortData={sortData} />
            </section>

            <section>
                {getAttrListJSX(attrData)}
            </section>
            <div></div>

            {/* <GoogleMaps location={location} /> */}
            {/* {loading ? (
                <p>Loading...</p>
            ) : ( */}
            {locationData.length > 0 &&
                <GoogleMaps location={locationData} />

            }


        </div>
    )
}



export default AttractionList