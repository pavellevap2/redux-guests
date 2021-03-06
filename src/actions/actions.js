export const UPDATE_NEW_GUEST = 'GUEST/UPDATE_NEW_GUEST'
export const ADD_GUEST = 'GUEST/ADD_GUEST'

export const REMOVE_GUEST = 'GUESTS/REMOVE_GUEST'
export const CHANGE_GUEST_TYPE_ = 'GUESTS/CHANGE_GUESTS_TYPE'
export const UPDATE_GUEST = 'GUEST/UPDATE_GUEST'

export const CHANGE_GUESTS_TYPE = 'GUESTS/FILTER/CHANGE_GUESTS_TYPE'

export const updateNewGuest = name => ({
  type: UPDATE_NEW_GUEST,
  payload: name,
})

export const addGuest = name => ({ type: ADD_GUEST, payload: name })

export const updateGuest = (name, i) => ({
  type: UPDATE_GUEST,
  payload: { index: i, name },
})

export const removeGuest = i => ({ type: REMOVE_GUEST, payload: i })

export const changeGuestType = i => ({ type: CHANGE_GUEST_TYPE_, payload: i })

export const changeGuestsType = guestsType => ({
  type: CHANGE_GUESTS_TYPE,
  payload: guestsType,
})
