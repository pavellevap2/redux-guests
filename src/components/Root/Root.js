import React from 'react'
import GuestFilter from '../../components/GuestFilter'
import Guests from '../Guests/Guests'
import { ALL, ALONE, NOT_ALONE } from '../../reducers/guestsType'

const countGuests = guests => {
  let guestsNumber = guests.length
  guests.forEach(
    guest => (!guest.alone ? (guestsNumber += 1) : (guestsNumber += 0)),
  )

  return guestsNumber
}

const Root = props => {
  const { guest, updateNewGuest, addGuest, guests, changeGuestsType } = props

  return (
    <div>
      <input
        type="text"
        value={guest}
        onChange={e => updateNewGuest(e.target.value)}
        onKeyPress={e => (e.key == 'Enter' ? addGuest(guest) : false)}
      />

      <h3>number of guests {countGuests(guests)}</h3>

      <GuestFilter
        guestsTypeAll={() => changeGuestsType(ALL)}
        guestsTypeAlone={() => changeGuestsType(ALONE)}
        guestsTypeNotAlone={() => changeGuestsType(NOT_ALONE)}
      />
      <Guests currGuestList={guests} />
    </div>
  )
}
export default Root
