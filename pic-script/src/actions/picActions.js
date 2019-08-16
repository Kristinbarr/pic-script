import axios from 'axios'

// ACTION TYPES
export const FETCH_PIC_START = 'FETCH_PIC_START'
export const FETCH_PIC_SUCCESS = 'FETCH_PIC_SUCCESS'
export const FETCH_PIC_FAILURE = 'FETCH_PIC_FAILURE'

// THUNK contains asynchronous function and returns objects
export const getPic = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PIC_START })
    axios
      .get('https://picsum.photos/1000/600/')
      .then((res) => {
        dispatch({ type: FETCH_PIC_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: FETCH_PIC_FAILURE, payload: err.response })
      })
  }
}
