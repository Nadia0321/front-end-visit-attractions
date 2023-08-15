import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
import { Marker } from 'react-google-maps';

const GoogleMaps = ({ location, defaultLocations }) => {

    const renderMarkers = () => {
        return location.map((loc, index) => (
            <div key={index} lat={loc.lat} lng={loc.lng} className='marker'>
                <div className='marker-text'>{defaultLocations[index]}</div>
            </div>
        ));
    };

    // const renderMarkers = () => {
    //     return location.map((loc, index) => (
    //         <div key={index} lat={loc.lat} lng={loc.lng} style={{
    //             background: 'red',
    //             color: 'red',
    //             padding: '6px',
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             fontWeight: 'bold'
    //         }}>
    //             .
    //         </div>
    //     ));
    // };

    const myKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    console.log(myKey)
    return (
        <div style={{ height: '45rem', width: '55rem', margin: '0  auto 20rem auto' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                }}
                defaultCenter={{ lat: 40.782579, lng: -73.965664 }}
                defaultZoom={12}
            >
                {renderMarkers()}

            </GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;
