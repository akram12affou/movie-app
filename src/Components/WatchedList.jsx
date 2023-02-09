import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
function WatchedList() {
  const watchedList = useSelector(state => state.WatchedList)
  console.log(watchedList)
  const dispatch = useDispatch()
  const handleRemove = (e) => {
      dispatch({type: 'remove',payload:e})
  }
  return (
    <div>{watchedList.map(e=> {
      return(
        <>
          <div key={e.id}>
              <span>{e.original_title}</span>
              <br />
              <span>{e.overview}</span>
              <button onClick={() => handleRemove(e)}>Remove</button>
              <br />
              <hr />
            </div>
        </>
      )
    })}</div>
  )
}

export default WatchedList