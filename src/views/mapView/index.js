import './styles.scss';
import EarthquakeMap from "../../components/map";

const MapView = () => {
    return (
        <div>
            <div className="flex-container">
                <EarthquakeMap/>
            </div>
        </div>
    )
}

export default MapView