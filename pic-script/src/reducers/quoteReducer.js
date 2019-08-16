import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS
  // FETCH_QUOTE_FAILURE
} from '../actions'

export const initialState = {
  quote: {},
  quoteIsLoading: false,
  error: ''
}

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        quote: action.payload,
        quoteIsLoading: true,
        error: ''
      }
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quoteIsLoading: false,
        quote: action.payload,
        error: ''
      }
    default:
      return state
  }
}
