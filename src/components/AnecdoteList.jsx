import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter) {
      return anecdotes.filter(anecdote => anecdote.content.includes(filter))
    }
    return anecdotes
  })

  return (
    <>
      {[...anecdotes].sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                dispatch(addVote(anecdote))
                dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
              }}>
                vote
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}


export default AnecdoteList