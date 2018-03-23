import React from 'react'
import GuestContainer from '../../containers/GuestContainer'

const Guests = props => {
  return (
    <div>
      <ul>
        {props.currGuestList.map((guest, i) => (
          <div key={i}>
            <GuestContainer guest={guest} index={i} />
          </div>
        ))}
      </ul>
    </div>
  )
}
export default Guests
