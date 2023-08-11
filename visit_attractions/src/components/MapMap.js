// import { useEffect, useRef, useState } from "react"

// const Map = ({ children }: { children: ReactNode }) => {
//     const ref = useRef();
//     const [map, setMap] = useState()

//     const style = { height: "40vh" }
//     useEffect(() => {
//         setMap(new window.google.maps.Map(ref.current, {}))
//     }, [])

//     if (map) {
//         map.setCenter(center)
//         map.setZoom(zoom)
//     }
//     return <div ref={ref} id="map" style={style} >
//         {React.Children.map(children, (child: ReactElement) =>
//             React.cloneElement(child, { map })
//         )}
//     </div>
// }
// export default Map

import React, { useEffect, useRef, useState } from "react";

const Map = ({ children }) => {
    const ref = useRef();
    const [map, setMap] = useState();

    const style = { height: "40vh" };

    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current, {}));
    }, []);

    if (map) {
        map.setCenter(center);
        map.setZoom(zoom);
    }

    return (
        <div ref={ref} id="map" style={style}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { map })
            )}
        </div>
    );
};

const center = { lat: 40.7128, lng: -74.0060 };
const zoom = 10;

export default Map;
