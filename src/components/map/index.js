import React, {useRef, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getEarthquakeData} from "../../redux/actions";


const EarthquakeMap = () => {
    const earthquakeData = useSelector(({earthquakeData}) => earthquakeData);


    return (
        <div>
            Hello World!
        </div>
    )
}

export default EarthquakeMap