import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './styles.scss';
import {fetchFromApi, getEarthquakeData} from "../../redux/actions";
import EarthquakeMap from "../../components/map";

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
            <EarthquakeMap/>
        </div>
    )
}

export default Homepage