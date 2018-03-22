import Root from "../components/Root/Root";
import {connect } from "react-redux";
import {updateNewGuest, addGuest} from "../actions/actions";

const mapStateToProps = state => ({
    guest: state.guest,
    guests: state.guests
});

const mapDispatchToProps = dispatch => ({
    updateNewGuest: (name) => dispatch(updateNewGuest(name)),
    addGuest: (name) => dispatch(addGuest(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);