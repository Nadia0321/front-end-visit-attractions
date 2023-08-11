// import React from "react";
// import GoogleMapReact from 'google-map-react';

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap() {
//     const defaultProps = {
//         center: {
//             lat: 40.363874,
//             lng: -74.01502627
//         },
//         zoom: 11
//     };

//     return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '50vh', width: '50%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8' }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
//             >
//                 <Marker lat={40.337349} lng={-74.592178} />
//             </GoogleMapReact>
//         </div>
//     );
// }

// const Marker = () => {
//     return <div className="SuperAwesomePin"></div>
// }

// ==============================================
// import React, { useState } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap() {
//     const [mapCenter, setMapCenter] = useState({ lat: 40.363874, lng: -74.01502627 });
//     const [markerPosition, setMarkerPosition] = useState({ lat: 40.363874, lng: -74.720829 });
//     const [geocoder, setGeocoder] = useState(null);

//     const handlePlaceSelect = (place) => {
//         if (geocoder) {
//             geocoder.geocode({ address: place }, (results, status) => {
//                 if (status === "OK" && results.length > 0) {
//                     const location = results[0].geometry.location;
//                     const lat = location.lat();
//                     const lng = location.lng();
//                     setMapCenter({ lat, lng });
//                     setMarkerPosition({ lat, lng });
//                 }
//             });
//         }
//     };

//     const handleApiLoaded = ({ maps }) => {
//         setGeocoder(new maps.Geocoder());
//     };

//     return (
//         <div style={{ height: "50vh", width: "50%" }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8' }}
//                 defaultCenter={mapCenter}
//                 defaultZoom={11}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={handleApiLoaded}
//             >
//                 <AnyReactComponent lat={markerPosition.lat} lng={markerPosition.lng} text="My Marker" />
//             </GoogleMapReact>

//             <input
//                 type="text"
//                 placeholder="Enter a place..."
//                 onChange={(e) => {
//                     const inputValue = e.target.value;
//                     if (inputValue && geocoder) {
//                         handlePlaceSelect(inputValue);
//                     }
//                 }}
//             />
//         </div>
//     );
// }


// ===============================================================================
// import React, { useState, useEffect } from "react";
// import GoogleMapReact from "google-map-react";

// const CustomMarker = ({ text }) => (
//     <div style={{ color: "red", fontSize: "12px" }}>{text}</div>
// );

// export default function SimpleMap() {
//     const [mapCenter, setMapCenter] = useState({ lat: 40.363874, lng: -74.01502627 });
//     const [markerPositions, setMarkerPositions] = useState([]);
//     const [geocoder, setGeocoder] = useState(null);
//     const placesToDisplay = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX"];

//     useEffect(() => {
//         if (geocoder) {
//             const geocodePromises = placesToDisplay.map((place) => {
//                 return new Promise((resolve) => {
//                     geocoder.geocode({ address: place }, (results, status) => {
//                         if (status === "OK" && results.length > 0) {
//                             const location = results[0].geometry.location;
//                             resolve({ lat: location.lat(), lng: location.lng() });
//                         } else {
//                             resolve(null);
//                         }
//                     });
//                 });
//             });

//             Promise.all(geocodePromises).then((positions) => {
//                 const validPositions = positions.filter((position) => position !== null);
//                 setMarkerPositions(validPositions);
//             });
//         }
//     }, [geocoder]);

//     const handleApiLoaded = ({ maps }) => {
//         setGeocoder(new maps.Geocoder());
//     };

//     return (
//         <div style={{ height: "50vh", width: "50%" }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8' }}
//                 defaultCenter={mapCenter}
//                 defaultZoom={5}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={handleApiLoaded}
//             >
//                 {markerPositions.map((position, index) => (
//                     <CustomMarker
//                         key={index}
//                         lat={position.lat}
//                         lng={position.lng}
//                         text={`Marker ${index + 1}`}
//                     />
//                 ))}
//             </GoogleMapReact>
//         </div>
//     );
// }

// ================== okkkkkkkkkk



// const GoogleMaps = ({ latitude, longitude }) => {
//     const renderMarkers = (map, maps) => {
//         let marker = new maps.Marker({
//             position: { lat: latitude, lng: longitude },
//             map,
//             title: 'Hello World!'
//         });
//         return marker;
//     };

//     return (
//         <div style={{ height: '50vh', width: '70%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8' }}
//                 defaultCenter={{ lat: latitude, lng: longitude }}
//                 defaultZoom={10}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//             >
//             </GoogleMapReact>
//         </div>
//     );
// };

// export default GoogleMaps;

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
    // const [location, setLocation] = useState([]);

    // useEffect(() => {

    //     const fetchedLocation = [
    //         { lat: 40.782579, lng: -73.965664 },
    //         { lat: 40.712742, lng: -74.013382 }
    //     ];

    //     setLocation(fetchedLocation);
    // }, []);

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

    //   const lat1 = 40.712742;
    //   const lng1 = -74.013382;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8'
                }}
                defaultCenter={{ lat: 40.782579, lng: -73.965664 }}
                defaultZoom={12}
            >
                {renderMarkers()}
                {/* <div lat={lat1} lng={lng1}>
          My Marker 2
        </div> */}
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;
