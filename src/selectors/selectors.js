import { ALL, ALONE, NOT_ALONE } from '../reducers/guestsType'

export const getGuest = state => state.guest

export const getGuests = ({ guestsType, guests }) =>
  guestsType === ALL
    ? guests
    : guestsType === ALONE
      ? guests.filter(x => x.alone)
      : guestsType === NOT_ALONE ? guests.filter(x => !x.alone) : guests
