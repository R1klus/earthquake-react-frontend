import {useDispatch, useSelector} from "react-redux";
import "./styles.scss"
import "../../styles/index.scss"
import {reverseEarthquakeData, sortEarthquakeData} from "../../redux/actions";
import {useCallback, useEffect, useState} from "react";
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti"


const EarthquakeDataTable = (callback, deps) => {
    const earthquakes = useSelector(({earthquakes}) => earthquakes);
    const [currentSort, setCurrentSort] = useState("Time")
    const [descending, setDescending] = useState(false);
    const dispatch = useDispatch();

    const updateArrows = useCallback((arrow_id_desc, arrow_id_asc) => {
        const arrows = document.getElementsByClassName("sort-arrow")
        if (descending) {
            for (const arrow of arrows){
                if(arrow.id !== arrow_id_desc){
                    arrow.style.display = "none";
                }
                else {
                    arrow.style.display = "block";
                }
            }
        }else {
            for (const arrow of arrows){
                if(arrow.id !== arrow_id_asc){
                    arrow.style.display = "none";
                }
                else {
                    arrow.style.display = "block";
                }
            }
        }
    },[descending])

    const updateSortById = (currentSort) => {
        const currentSortElement = document.getElementById("sort-by")
        if (currentSortElement.innerHTML === currentSort) return;
        currentSortElement.id = null;
        const headings = document.getElementsByClassName("data-table-column-heading");
        for(const heading of headings){
            if(heading.childNodes[0].innerHTML === currentSort){
                heading.id = "sort-by"
            }
        }
    }

    useEffect(() => {
        switch (currentSort){
            case "Location":
                updateArrows("sort-location-desc", "sort-location-asc")
                updateSortById(currentSort);
                break;
            case "Latitude":
                updateArrows("sort-latitude-desc", "sort-latitude-asc")
                updateSortById(currentSort);
                break;
            case "Longitude":
                updateArrows("sort-longitude-desc", "sort-longitude-asc")
                updateSortById(currentSort);
                break;
            case "Quality":
                updateArrows("sort-quality-desc", "sort-quality-asc")
                updateSortById(currentSort);
                break;
            case "Richter":
                updateArrows("sort-richter-desc", "sort-richter-asc")
                updateSortById(currentSort);
                break;
            case "Time":
                updateArrows("sort-time-desc", "sort-time-asc")
                updateSortById(currentSort);
                break;
            default:
                updateArrows("sort-time-desc", "sort-time-asc")
                updateSortById(currentSort);
                break
        }
    }, [currentSort, earthquakes, updateArrows])

    const sortBy = (event) => {
        event.preventDefault();
        switch (event.target.innerHTML) {
            case "Location":
                if (currentSort === "Location"){
                    dispatch(reverseEarthquakeData());
                    setDescending(!descending)
                    return;
                }
                setCurrentSort("Location")
                setDescending(false);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (earthquake_1.humanReadableLocation.toLowerCase() < earthquake_2.humanReadableLocation.toLowerCase()){
                        return -1;
                    }
                    if (earthquake_1.humanReadableLocation.toLowerCase() > earthquake_2.humanReadableLocation.toLowerCase()){
                        return 1;
                    }
                }))
                break
            case "Latitude":
                if (currentSort === "Latitude"){
                    dispatch(reverseEarthquakeData());
                    setDescending(!descending)
                    return;
                }
                setCurrentSort("Latitude")
                setDescending(false);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (earthquake_1.latitude < earthquake_2.latitude){
                        return -1;
                    }
                    if (earthquake_1.latitude > earthquake_2.latitude){
                        return 1;
                    }
                }))
                break
            case "Longitude":
                if (currentSort === "Longitude"){
                    dispatch(reverseEarthquakeData());
                    setDescending(!descending)
                    return;
                }
                setCurrentSort("Longitude")
                setDescending(false);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (earthquake_1.longitude < earthquake_2.longitude){
                        return -1;
                    }
                    if (earthquake_1.longitude > earthquake_2.longitude){
                        return 1;
                    }
                }))
                break
            case "Quality":
                if (currentSort === "Quality"){
                    dispatch(reverseEarthquakeData());
                    setDescending(!descending)
                    return;
                }
                setCurrentSort("Quality")
                setDescending(false);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (earthquake_1.quality < earthquake_2.quality){
                        return -1;
                    }
                    if (earthquake_1.quality > earthquake_2.quality){
                        return 1;
                    }
                }))
                break
            case "Richter":
                if (currentSort === "Richter"){
                    dispatch(reverseEarthquakeData());
                    setDescending(!descending)
                    return;
                }
                setCurrentSort("Richter")
                setDescending(false);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (earthquake_1.size < earthquake_2.size){
                        return -1;
                    }
                    if (earthquake_1.size > earthquake_2.size){
                        return 1;
                    }
                }))
                break
            case "Time":
                if (currentSort === "Time"){
                    dispatch(reverseEarthquakeData());
                    setDescending(!descending)
                    return;
                }
                setCurrentSort("Time")
                setDescending(false);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (new Date(earthquake_1.timestamp) < new Date(earthquake_2.timestamp)){
                        return 1;
                    }
                    if (new Date(earthquake_1.timestamp) > new Date(earthquake_2.timestamp)){
                        return -1;
                    }
                }))
                break
            default:
                setCurrentSort("Time")
                setDescending(true);
                dispatch(sortEarthquakeData((earthquake_1, earthquake_2) => {
                    if (earthquake_1.index < earthquake_2.index){
                        return -1;
                    }
                    if (earthquake_1.index > earthquake_2.index){
                        return 1;
                    }
                }))
                break
        }
    }

    return (
        <div className="data-table-container">
            <div className="data-table">
                <div className="data-table-header">
                    <span className="data-table-column-heading" onClick={(event) => {sortBy(event)}}>
                        <span>Location</span> <TiArrowSortedDown className="sort-arrow" id={"sort-location-desc"}/> <TiArrowSortedUp className="sort-arrow" id={"sort-location-asc"}/>
                    </span>

                    <span className="data-table-column-heading not-on-mobile" onClick={(event) => {sortBy(event)}}>
                        <span>Latitude</span> <TiArrowSortedDown className="sort-arrow" id={"sort-latitude-desc"}/> <TiArrowSortedUp className="sort-arrow" id={"sort-latitude-asc"}/>
                    </span>

                    <span className="data-table-column-heading not-on-mobile" onClick={(event) => {sortBy(event)}}>
                        <span>Longitude</span> <TiArrowSortedDown className="sort-arrow" id={"sort-longitude-desc"}/> <TiArrowSortedUp className="sort-arrow" id={"sort-longitude-asc"}/>
                    </span>

                    <span className="data-table-column-heading not-on-mobile" onClick={(event) => {sortBy(event)}}>
                        <span>Quality</span> <TiArrowSortedDown className="sort-arrow" id={"sort-quality-desc"}/> <TiArrowSortedUp className="sort-arrow" id={"sort-quality-asc"}/>
                    </span>

                    <span className="data-table-column-heading" onClick={(event) => {sortBy(event)}}>
                        <span>Richter</span> <TiArrowSortedDown className="sort-arrow" id={"sort-richter-desc"}/> <TiArrowSortedUp className="sort-arrow" id={"sort-richter-asc"}/>
                    </span>

                    <span className="data-table-column-heading" id="sort-by" onClick={(event) => {sortBy(event)}}>
                        <span>Time</span> <TiArrowSortedDown className="sort-arrow" id={"sort-time-desc"}/> <TiArrowSortedUp className="sort-arrow" id={"sort-time-asc"}/>
                    </span>
                </div>
                <div className="data-table-content">
                    {earthquakes.map((earthquake, index) => (
                        <div className="data-table-row" key={index}>
                            <span className="data-table-cell">
                                {earthquake.humanReadableLocation}
                            </span>
                            <span className="data-table-cell not-on-mobile">
                                {earthquake.latitude}
                            </span>
                            <span className="data-table-cell not-on-mobile">
                                {earthquake.longitude}
                            </span>
                            <span className="data-table-cell not-on-mobile">
                                {earthquake.quality}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.size}
                            </span>
                            <span className="data-table-cell">
                                {earthquake.timestamp ? new Date(earthquake.timestamp).toUTCString() : null}
                            </span>

                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default EarthquakeDataTable