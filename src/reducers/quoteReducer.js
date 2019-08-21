import seed from '../seedData'

import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE
} from '../actions'

export const initialState = {
  quote: seed,
  singleQuote: seed[Math.floor(Math.random() * seed.length) + 0],
  quoteIsLoading: false,
  error: ''
}

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        // quote: action.payload,
        singleQuote: '',
        quoteIsLoading: true,
        error: ''
      }
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quoteIsLoading: false,
        singleQuote: state.quote[Math.floor(Math.random() * seed.length) + 0],
        error: ''
      }
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        singleQuote: '',
        quoteIsLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}
