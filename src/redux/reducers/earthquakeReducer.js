import {GET_EARTHQUAKE_DATA, REVERSE_EARTHQUAKE_DATA, SORT_EARTHQUAKE_DATA} from "../constants";

export default function earthquakeReducer(state=[], action){
    switch(action.type){
        case GET_EARTHQUAKE_DATA:
            console.log("Action type: " + action.type)
            state = action.payload;
            return [...state]
        case SORT_EARTHQUAKE_DATA:
            console.log("Action type: " + action.type)
            const sorted_data = state.sort(action.payload);
            return [...sorted_data]
        case REVERSE_EARTHQUAKE_DATA:
            console.log("Action type: " + action.type)
            const reversed_data = state.reverse();
            return [...reversed_data]
        default:
            return state
    }
}