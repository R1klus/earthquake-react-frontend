import './styles.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFetchFrequency} from "../../redux/actions";
import {calculateMinutesFromMs, calculateMsFromMinutes} from "../../utils";

const FrequencyInput = () => {
    const fetchFrequency = useSelector(({fetchFrequency}) => fetchFrequency);
    const dispatch = useDispatch();
    const minFrequency = calculateMsFromMinutes(5);
    const maxFrequency = calculateMsFromMinutes(20);


    useEffect(() => {
        document.getElementById("frequency-value").innerHTML = calculateMinutesFromMs(fetchFrequency);
    }, [fetchFrequency])

    const onClick = (event) => {
        event.preventDefault();

        if (event.target.className === "frequency-next") {
            if(fetchFrequency >= maxFrequency) return;
            dispatch(updateFetchFrequency(fetchFrequency + calculateMsFromMinutes(1)))
        }
        if (event.target.className === "frequency-prev") {
            if(fetchFrequency <= minFrequency) return;
            dispatch(updateFetchFrequency(fetchFrequency - calculateMsFromMinutes(1)))
        }
    }

    return (
        <div className="frequency-input">
            <div>
                Fetch Interval (Minutes)
            </div>
            <div className="frequency-container">
                <span className="frequency-prev" onClick={(event) => {
                    onClick(event)
                }}>&lt;</span>
                <div id="frequency-value">5</div>
                <span className="frequency-next" onClick={(event) => {
                    onClick(event)
                }}>&gt;</span>

            </div>

        </div>
    )
}

export default FrequencyInput