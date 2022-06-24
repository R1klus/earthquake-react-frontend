import {GET_EARTHQUAKE_DATA} from "../constants";
import {getEarthquakeData} from "../actions";


const earthquakeDataHandler = (store) => {
    return (next) => async (action) => {
        if (action.type === GET_EARTHQUAKE_DATA) {
            const url = process.env.EARTHQUAKE_API_URL;

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
            console.log(earthquakeData);
            store.dispatch(getEarthquakeData(earthquakeData));
        }
    }
}

export default earthquakeDataHandler()