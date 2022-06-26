import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './styles.scss';
import {fetchFromApi} from "../../redux/actions";


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
            <div className="flex-container">
                <h1>
                    Tables!
                </h1>
            </div>
        </div>
    )
}

export default DataView