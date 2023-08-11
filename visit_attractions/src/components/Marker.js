// import { useEffect, useRef } from "react"

// const Marker = ({ position, map }: { position: google.maps.LatLngLiteral, map: google.maps.Map }) => {

//     console.log({ position })
//     const [marker, setMarker] = useState(null)

//     useEffect(() => {
//         const Marker = new google.maps.Marker({});



//     }, [])


//     if (marker) {
//         Marker.setMap(map)
//         marker.setPosition(position)
//     }


//     return <div />
// }
// export default Marker


import React, { useEffect } from "react";

const Marker = ({ position, map }) => {
    useEffect(() => {
        const marker = new window.google.maps.Marker({
            position,
            map,
        });
    }, [map, position]);

    return null;
};

export default Marker;





// import React, { useEffect, useRef } from "react";

// const Marker = ({ position }) => {
//     const markerRef = useRef(null);

//     useEffect(() => {
//         if (position && !markerRef.current) {
//             markerRef.current = new window.google.maps.Marker({
//                 position,
//                 map: new window.google.maps.Map(document.createElement("div")),
//             });
//         }

//         if (markerRef.current) {
//             markerRef.current.setPosition(position);
//         }

//         return () => {
//             if (markerRef.current) {
//                 markerRef.current.setMap(null);
//             }
//         };
//     }, [position]);

//     return null;
// };

// export default Marker;