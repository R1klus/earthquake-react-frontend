import {FETCH_FROM_API, GET_EARTHQUAKE_DATA} from "../constants";
import {getEarthquakeData} from "../actions";


const earthquakeDataHandler = (store) => {
    return (next) => async (action) => {
        if (action.type === FETCH_FROM_API) {
            const url = process.env.REACT_APP_EARTHQUAKE_API_URL;
            console.log(url)

            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const response = await fetch(url, options);
            if (!response.ok){
                throw new Error(`HTTP Error!, Status: ${response.status}`)
            }

            const earthquakeData = await response.json();
            store.dispatch(getEarthquakeData(earthquakeData.results));
        }
        return next(action);
    };
};

export default earthquakeDataHandler