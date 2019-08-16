import {
  FETCH_PIC_START,
  FETCH_PIC_SUCCESS,
  // FETCH_PIC_FAILURE
} from '../actions'

export const initialState = {
  pic: 'https://picsum.photos/1000/600/',
  picIsLoading: false,
  error: ''
}

export const picReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIC_START:
      return {
        ...state,
        pic: '',
        picIsLoading: true,
        error: ''
      }
    case FETCH_PIC_SUCCESS:
      return {
        ...state,
        picIsLoading: false,
        pic: 'https://picsum.photos/1000/600/',
        error: ''
      }
    default:
      return state
  }
}
