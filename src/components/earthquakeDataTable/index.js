import {useSelector} from "react-redux";
import "./styles.scss"




const EarthquakeDataTable = () => {

    const earthquakes = useSelector(({earthquakes}) => earthquakes);

    return (
        <div className="data-table-container">
            <div className="data-table">
                <div className="data-table-header">
                    <span className="data-table-column-heading">
                        Index
                    </span>
                    <span className="data-table-column-heading">
                        Location
                    </span>

                    <span className="data-table-column-heading">
                        Latitude
                    </span>

                    <span className="data-table-column-heading">
                        Longitude
                    </span>

                    <span className="data-table-column-heading">
                        Quality
                    </span>

                    <span className="data-table-column-heading">
                        Richter
                    </span>

                    <span className="data-table-column-heading">
                        Time
                    </span>
                </div>
                <div className="data-table-content">
                    {earthquakes.map((earthquake, index) => (
                        <div className="data-table-row" key={index}>
                            <span className="data-table-cell">
                                {index}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.humanReadableLocation}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.latitude}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.longitude}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.quality}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.size}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.timestamp ? new Date(earthquake.timestamp).toString() : null}
                            </span>

                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default EarthquakeDataTable