import { combineReducers } from 'redux'
import authReducer from './auth'
import projectReducer from './projects'

export default combineReducers({
  auth: authReducer,
  projects: projectReducer
})