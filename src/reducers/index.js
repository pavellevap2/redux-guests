import {combineReducers} from "redux";

let handleInput = (input = "", action) => {
    if (action.type == "HANDLE_INPUT") {
        input = action.data;
        return input;
    } else if (action.type == "ADD_GUEST") {
        input = "";
        return input;
    } else {
        return input;
    }
};

let guests = (guests = [], action) => {

    if (action.type == "ADD_GUEST" && action.data.length > 0) {
        guests = [...guests, {name: action.data, alone: true}];

        return guests;
    } else if (action.type == "REMOVE_GUEST") {
        let allGuests = action.guests;
        let filteredGuests = allGuests.filter((_, i) => i != action.index);

        return filteredGuests;
    } else {
        return guests;
    }
};

let app = combineReducers({
    handleInput,
    guests,
});

export default app;