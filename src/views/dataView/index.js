import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './styles.scss';
import {fetchFromApi} from "../../redux/actions";
import EarthquakeMap from "../../components/map";
import Navbar from "../../components/navBar";

const DataView = () => {
    const dispatch = useDispatch();

    const updateEarthquakeData = () => {
        dispatch(fetchFromApi())
    }

    useEffect(() => {
        updateEarthquakeData();
    })

    return (
        <div>
            <Navbar/>
            <div className="flex-container">
                <h1>
                    Tables!
                </h1>
            </div>
        </div>
    )
}

export default DataView