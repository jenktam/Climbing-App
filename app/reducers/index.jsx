import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  projects: require('./projects').default
})

export default rootReducer
