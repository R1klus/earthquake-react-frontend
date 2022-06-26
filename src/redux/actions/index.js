import {
    FETCH_FROM_API,
    GET_EARTHQUAKE_DATA,
    NEW_FETCH_FREQUENCY,
    REVERSE_EARTHQUAKE_DATA,
    SORT_EARTHQUAKE_DATA
} from "../constants";

export const getEarthquakeData = (earthquakeData) => {
    return {
        type: GET_EARTHQUAKE_DATA,
        payload: earthquakeData
    }
}

export const sortEarthquakeData = (sortingFunction) => {
    return {
        type: SORT_EARTHQUAKE_DATA,
        payload: sortingFunction
    }
}

export const reverseEarthquakeData = () => {
    return {
        type: REVERSE_EARTHQUAKE_DATA,
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

