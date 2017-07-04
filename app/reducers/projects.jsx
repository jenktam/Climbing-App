import axios from 'axios'

// actions
const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'

// action creators
const loadAllProjects = projects => ({
  type: GET_ALL_PROJECTS,
  projects
})

// thunk action creators
export const fetchAllProjects = () => dispatch => {
  axios.get('/api/projects')
  .then(res => res.data)
  .then(allProjects => dispatch(loadAllProjects(allProjects)))
  .catch(console.error.bind(console))
}

const initialState = {
  projects: []
}

// reducers
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_ALL_PROJECTS:
    newState.projects = action.projects
    break
  default:
    return state
  }
  return newState
}

export default reducer
