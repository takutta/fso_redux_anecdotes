import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    show(state, action) {
      return action.payload
    }
  },
})

export const { show } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (message, duration) => {
  return async dispatch => {
    dispatch(show(message))
    setTimeout(() => {
      dispatch(show(''))
    }, duration * 1000)


  }
}