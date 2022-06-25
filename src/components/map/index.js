import React, {useRef, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ReactMapGL, {Marker} from "react-map-gl"
import styles from "./styles.scss"


const EarthquakeMap = () => {
    const earthquakes = useSelector(({earthquakes}) => earthquakes);

    useEffect(() => {
        console.log(earthquakes)
        console.log(process.env.REACT_APP_MAPBOX_API_KEY)
        console.log(process.env.REACT_APP_EARTHQUAKE_API_URL)
    }, [earthquakes])

    const [viewport, setViewport] = useState({
        latitude: 64.8085175,
        longitude: -18.806046007266094,
        width: "95%",
        height: "95%",
        zoom: 7,
    })

    return (
        <div className="map-container">
            <ReactMapGL
                {...viewport}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                onMove={evt => setViewport(evt.viewState)}
            >
            </ReactMapGL>
        </div>

    )
}

export default EarthquakeMap