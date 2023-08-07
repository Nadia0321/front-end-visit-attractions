import React from 'react';
import './Place.css'
import { Link } from 'react-router-dom';


const Place = ({ placeID, image, name, onHandleAttractions }) => {

    return (
        <div className='place'>
            <div className='place-pic'>
                <img src={image} alt="" width="200px" height="150px" ></img>
            </div>
            <Link to={`/attractions/${placeID}`}>
                {name}
            </Link>
        </div >

    );



}

export default Place