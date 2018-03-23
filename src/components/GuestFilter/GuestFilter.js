import React from 'react'
import './GuestFilter.css'

const GuestFilter = props => {
  return (
    <ul className={'GuestFilter'}>
      <li>
        <button onClick={props.guestsTypeAll}>all guests</button>
      </li>
      <li>
        <button onClick={props.guestsTypeAlone}>lonely guests</button>
      </li>
      <li>
        <button onClick={props.guestsTypeNotAlone}>not alone guests</button>
      </li>
    </ul>
  )
}
export default GuestFilter
