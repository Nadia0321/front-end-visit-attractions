import React from 'react';
import styles from './Place.module.css'
import { Link } from 'react-router-dom';


const Place = ({ placeID, image, name, onHandleAttractions }) => {

    return (
        <div className={styles.place}>
            <img src={image} alt="" className={styles.image} />
            <Link className={styles.placeLink} to={`/attractions/${placeID}`}>
                {name}
            </Link>
        </div >

    );



}

export default Place