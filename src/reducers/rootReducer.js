import { combineReducers } from 'redux'
import guest from './guest'
import guests from './guests'
import guestsType from './guestsType'

const rootReducer = combineReducers({
  guest,
  guests,
  guestsType,
})

export default rootReducer
