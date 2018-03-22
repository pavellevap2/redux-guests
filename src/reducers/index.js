import {combineReducers} from "redux";
import guest from "./guest";
import guests from "./guests";


const rootReducer = combineReducers({
    guest,
    guests,
});

export default rootReducer;