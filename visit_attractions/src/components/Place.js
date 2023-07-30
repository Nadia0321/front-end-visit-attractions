import React, { useState } from 'react';
import './Place.css'
import Attractions from './Attraction'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const Place = ({ image, name }) => {
    const [goAttractions, setGoAttractions] = useState(false)

    const onClickHandle = () => {
        setGoAttractions(true)
        // window.history.pushState(null, '', '/attractions');
    }

    if (goAttractions) {
        return <Attractions />
    }
    // const navigate = useNavigate();

    return (
        <div className='place'>
            <div className='place-pic'>
                {image}
            </div>
            {/* <a href='/attractions' onClick={(e) => navigate('/attractions')}> */}
            <a href='/attractions' onClick={(e) => onClickHandle()}>
                {name}
                {/* <nav><a href="place/attractions.html">{name}</a></nav> */}
            </a>

        </div>

        // <Router>
        //     <Link to="/attractions">{name}</Link>
        //     <Route path="/" className='place-title' component={Attractions} />
        // </Router>

        // onClick={(e) => console.log('hi')}

    );



}

export default Place