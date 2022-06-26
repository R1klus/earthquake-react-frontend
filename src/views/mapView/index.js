import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './styles.scss';
import {fetchFromApi} from "../../redux/actions";
import EarthquakeMap from "../../components/map";

const MapView = () => {
    const dispatch = useDispatch();

    const updateEarthquakeData = () => {
        dispatch(fetchFromApi())
    }

    useEffect(() => {
        updateEarthquakeData();
    })

    return (
        <div>

            <div className="flex-container">
                <EarthquakeMap/>
            </div>
        </div>
    )
}

export default MapView