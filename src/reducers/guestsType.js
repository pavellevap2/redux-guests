import { CHANGE_GUESTS_TYPE, UPDATE_NEW_GUEST } from '../actions/actions'

export const ALL = 'ALL'
export const ALONE = 'ALONE'
export const NOT_ALONE = 'NOT_ALONE'

const guestsType = (guestsType = '', action) => {
  if (action.type == CHANGE_GUESTS_TYPE) {
    return action.payload
  } else {
    return ALL
  }
}

export default guestsType
