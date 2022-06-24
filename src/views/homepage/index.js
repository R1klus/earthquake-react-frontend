import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './styles.scss';
import {fetchFromApi, getEarthquakeData} from "../../redux/actions";

const Homepage = () => {
    const dispatch = useDispatch();

    const updateEarthquakeData = () => {
        dispatch(fetchFromApi())
    }

    useEffect(() => {
        updateEarthquakeData();
    }, [dispatch])

    return (
        <div>
            <h1>
               Homepage!
            </h1>
        </div>
    )
}

export default Homepage