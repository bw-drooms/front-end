// import actions to run compiler switch cases
import { combineReducers } from 'redux'
//call company reducer
import companyReducer from './CompanyReducer'

//combine reducer for calls -set to default
const rootReducer = combineReducers({
    companyReducer
})
export default rootReducer