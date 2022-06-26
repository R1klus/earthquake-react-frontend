import {FETCH_FROM_API, GET_EARTHQUAKE_DATA, NEW_FETCH_FREQUENCY} from "../constants";

export const getEarthquakeData = (earthquakeData) => {
    return {
        type: GET_EARTHQUAKE_DATA,
        payload: earthquakeData
    }
}

export const fetchFromApi = () => {
    return {
        type: FETCH_FROM_API
    }
}

export const updateFetchFrequency = (newFrequency) => {
    return {
        type: NEW_FETCH_FREQUENCY,
        payload: newFrequency
    }
}

