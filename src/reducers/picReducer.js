import {
  FETCH_PIC_START,
  FETCH_PIC_SUCCESS,
  FETCH_PIC_FAILURE
} from '../actions'

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

export const initialState = {
  pic: `https://picsum.photos/${vw}/${vh}/`,
  picIsLoading: false,
  error: ''
}

export const picReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIC_START:
      return {
        ...state,
        picIsLoading: true,
        error: ''
      }
      case FETCH_PIC_SUCCESS:
        return {
          ...state,
          picIsLoading: false,
          pic: `https://picsum.photos/${vw}/${vh}/`,
          error: ''
        }
      case FETCH_PIC_FAILURE:
        return {
          ...state,
          pic: '',
          picIsLoading: false,
          error: action.payload
        }
    default:
      return state
  }
}
