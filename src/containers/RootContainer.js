import Root from '../components/Root/Root'
import { connect } from 'react-redux'
import { updateNewGuest, addGuest, changeGuestsType } from '../actions/actions'
import { getGuest, getGuests } from '../selectors/selectors'

const mapStateToProps = state => ({
  guest: getGuest(state),
  guests: getGuests(state),
})

const mapDispatchToProps = dispatch => ({
  updateNewGuest: name => dispatch(updateNewGuest(name)),
  addGuest: name => dispatch(addGuest(name)),

  changeGuestsType: guestType => dispatch(changeGuestsType(guestType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
