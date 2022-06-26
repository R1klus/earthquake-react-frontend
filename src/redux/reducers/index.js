import { combineReducers } from "redux";
import earthquakeReducer from "./earthquakeReducer";
import frequencyReducer from "./frequencyReducer";

export default combineReducers({
    earthquakes: earthquakeReducer,
    fetchFrequency: frequencyReducer
});