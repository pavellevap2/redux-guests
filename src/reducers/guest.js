import { UPDATE_NEW_GUEST, ADD_GUEST } from '../actions/actions'

const guest = (guest = '', action) => {
  switch (action.type) {
    case UPDATE_NEW_GUEST:
      return action.payload
    case ADD_GUEST:
      return ''
    default:
      return guest
  }
}

export default guest
