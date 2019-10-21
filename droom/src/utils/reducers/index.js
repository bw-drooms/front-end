// import actions to run compiler switch cases

//sets initial state
const initialState = {
    companyJob: [],
    company: [],
    isFetching: false,
    isUpdating: false,
    error: 'Error Response'

}

//combine reducer for calls -set to default
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default rootReducer