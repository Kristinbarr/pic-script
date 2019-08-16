import { combineReducers } from 'redux'

import { picReducer } from './picReducer'
import { quoteReducer } from './quoteReducer'

const rootReducer = combineReducers({
  picReducer,
  quoteReducer
})

export default rootReducer
