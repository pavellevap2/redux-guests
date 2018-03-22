import Guest from "../components/Guest/Guest";
import {connect } from "react-redux";
import {updateGuest, removeGuest, changeGuestType} from "../actions/actions";

const mapDispatchToProps = dispatch => ({
    updateGuest: (name, i) => dispatch(updateGuest(name, i)),
    removeGuest: (i) => dispatch(removeGuest(i)),
    changeGuestType: (i) => dispatch(changeGuestType(i))
});

export default connect(undefined, mapDispatchToProps)(Guest)