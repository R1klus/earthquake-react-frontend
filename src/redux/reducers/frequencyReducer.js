import {NEW_FETCH_FREQUENCY} from "../constants";
import {calculateMsFromMinutes} from "../../utils";

export default function earthquakeReducer(state=calculateMsFromMinutes(5), action){
    switch(action.type){
        case NEW_FETCH_FREQUENCY:
            state = action.payload;
            return state
        default:
            return state
    }
}