import {
  ADD_GUEST,
  REMOVE_GUEST,
  CHANGE_GUEST_TYPE_,
  UPDATE_GUEST,
} from '../actions/actions'

const guests = (guests = [], action) => {
  let updatedGuests = []

  switch (action.type) {
    case ADD_GUEST:
      return action.payload.length
        ? [...guests, { name: action.payload, alone: true }]
        : guests

    case REMOVE_GUEST:
      return guests.filter((_, i) => i != action.payload)

    case UPDATE_GUEST:
      if (action.payload.name.length) {
        updatedGuests = guests.map((guest, i) => {
          return i === action.payload.index
            ? { ...guest, name: action.payload.name }
            : guest
        })
      } else {
        updatedGuests = guests.filter((_, i) => i != action.payload.index)
      }
      return updatedGuests

    case CHANGE_GUEST_TYPE_:
      updatedGuests = guests.map((guest, i) => {
        return i == action.payload ? { ...guest, alone: !guest.alone } : guest
      })

      return updatedGuests

    default:
      return guests
  }
}

export default guests
