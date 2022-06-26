import {GET_EARTHQUAKE_DATA} from "../constants";

export default function earthquakeReducer(state=[], action){
    switch(action.type){
        case GET_EARTHQUAKE_DATA:
            console.log("Action type: " + action.type)
            state = action.payload;
            return [...state]
        default:
            return state
    }
}