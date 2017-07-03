import axios from 'axios'

const ALLPROJECTS = 'ALLPROJECTS'
const reducer = (state=[], action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ALLPROJECTS:
    newState.projects = state.projects
    break
  default:
    return state
  }
  return newState
}

export default reducer
