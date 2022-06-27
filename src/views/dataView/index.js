import './styles.scss';
import EarthquakeDataTable from "../../components/earthquakeDataTable";


const DataView = () => {

    return (
        <div>
            <div className="flex-container">
                <EarthquakeDataTable/>
            </div>
        </div>
    )
}

export default DataView