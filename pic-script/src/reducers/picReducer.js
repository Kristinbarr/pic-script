export const initialState = {
  pic: '',
  quote: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PIC':
      return {
        pic: action.payload
      }
      break
    case 'GET_QUOTE':
      return {
        quote: action.payload
      }

    default:
      return state
  }
}
