import axios from 'axios'

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START'
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS'
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE'

export const getQuote = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_QUOTE_START })
    // axios
    //   .get('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
    //   )
    //   .then((res) => {
    //     console.log('quote', res)
    //     dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data })
    //   })
    //   .catch((err) => {
      //     dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response })
      //   })


      try {
      dispatch({ type: FETCH_QUOTE_SUCCESS })
    } catch (err) {
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response })
    }
  }
}
