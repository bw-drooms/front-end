// import actions to run compiler switch cases
import { combineReducers } from 'redux'
//call company reducer
import companyReducer from './CompanyReducer'
import seekerReducer from './SeekerReducer'
import accountReducer from './accountReducer'
//combine reducer for calls -set to default
const rootReducer = combineReducers({
    companyReducer,seekerReducer
})
export default rootReducer