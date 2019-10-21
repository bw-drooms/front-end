//import actions to use

//sets initial state
const initialState = {
    companyJob: [],
    company: [],
    isFetching: false,
    isUpdating: false,
    error: 'Error Response'

}
//may need more state

//company reducer
const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
      return state
  }
} 

export default companyReducer