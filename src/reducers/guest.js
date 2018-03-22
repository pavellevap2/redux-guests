import {UPDATE_NEW_GUEST, ADD_GUEST} from "../actions/actions";

const guest = (guest = "", action) => {
    if (action.type == UPDATE_NEW_GUEST ) {
        return action.payload.name ;
    } else if (action.type == ADD_GUEST  ) {
        return "";
    } else {
        return guest;
    }
};

export default guest;