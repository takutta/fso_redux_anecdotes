import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    increaseVote(state, action) {
      return state.map(anecdote =>
        anecdote.id === action.payload.id
          ? action.payload
          : anecdote
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload
    }

  },
})

export const { increaseVote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

// dispatch(show(`new anecdote: ${newContent}`))
//     setTimeout(() => {
//       dispatch(show(''))
//     }, 5000)

export const addVote = content => {
  return async dispatch => {
    const updatedObject = { ...content, votes: content.votes + 1 }
    await anecdoteService.update(content.id, updatedObject)
    dispatch(increaseVote(updatedObject))
  }
}
