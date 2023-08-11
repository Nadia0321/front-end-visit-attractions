

// ========== okkkk list of lat and lon
// import React, { useEffect, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import axios from 'axios';




// // {New York : {lat, lon}}
// // lookupPlaces(locations).then(result => console.log(result))

// const GoogleMaps = ({ locations }) => {

//     const [latLonArray, setLatLonArray] = useState([])
//     // const locations = ['New York', 'State College', 'Washington D.C.']

//     const getLanLon = async placeName => {
//         const response = await axios
//             .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json', {
//                 params: {
//                     key: 'pk.4865d18a3669ca2b5e6e15f6880ad8db',
//                     q: placeName,
//                     format: 'JSON',
//                 },

//             })
//         const { lat: latitude, lon: longitude } = response.data[0]
//         return { latitude, longitude }

//     }
//     const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

//     const lookupPlaces = async (locations) => {
//         const result = []
//         for (const place of locations) {
//             result.push(await getLanLon(place));
//             await wait(1000);
//         }
//         console.log(result)
//         return result
//         // setLatLonArray(result)
//     }

//     const fetchLocations = () => {
//         lookupPlaces(locations)
//             .then(res => setLatLonArray(res))
//     }

//     useEffect(() => {
//         fetchLocations()

//     }, [])

//     const renderMarkers = (map, maps) => {
//         const markerList = latLonArray.map((loc) => {
//             return new maps.Marker({
//                 position: { lat: Number(loc.latitude), lng: Number(loc.longitude) },
//                 map,
//                 title: 'Attractions map'
//             });
//         });

//         return markerList;
//     };

//     return (
//         <div style={{ height: '50vh', width: '70%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8' }}
//                 defaultCenter={{ lat: 40.077258, lng: -88.161991 }}
//                 defaultZoom={4}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//             >
//             </GoogleMapReact>
//         </div>
//     );
// };

// export default GoogleMaps;


//=============================================


import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ location }) => {

    const renderMarkers = () => {
        return location.map((loc, index) => (
            <div key={index} lat={loc.lat} lng={loc.lng} style={{
                background: 'red',
                color: 'red',
                padding: '6px',
                // borderRadius: '50%',
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
