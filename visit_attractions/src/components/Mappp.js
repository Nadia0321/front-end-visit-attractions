import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ location }) => {

    const renderMarkers = () => {
        return location.map((loc, index) => (
            <div key={index} lat={loc.lat} lng={loc.lng} style={{
                background: 'red',
                color: 'red',
                padding: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold'
            }}>
                .
            </div>
        ));
    };

    const myKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    console.log(myKey)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    // key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                    key: 'AIzaSyAhbTcdnw1SalgnkIqmCswx4zAXFSJGX_s'

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
