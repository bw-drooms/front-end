import axiosWithAuth from '../axiosWithAuth'
import actionCreator from './actionCreator';

export const ACCOUNT_FETCH_SUCCESS ='ACCOUNT_FETCH_SUCCESS'
export const UPDATING_ACCOUNT_INFO = 'UPDATING_ACCOUNT_INFO';
export const ACCOUNT_INFORMATION_UPDATED = 'ACCOUNT_INFORMATION_UPDATED';
export const ERROR = 'ERROR';
export const REGISTERED = 'REGISTERED';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const GETTING_ACCOUNT_INFO = 'GETTING_ACCOUNT_INFO';
let registered = [];

export const updateAccountInfo = (
    account,
    accountType
)=> async dispatch => {
    dispatch(actionCreator(UPDATING_ACCOUNT_INFO));

    //debugger;
    let url = `/users/update`;
    if (accountType === 'company') {
        url = `/companies/update`;
    } else if (accountType === 'job') {
        url = `/jobseekers/update/${account.id}`;
    }

    axiosWithAuth()
        .put(`api/jobseekers/${[]}`, { ...account }    )
        .then(res => {
            //debugger;
            dispatch(actionCreator(ACCOUNT_INFORMATION_UPDATED, account));
        })
        .catch(err => {
            //debugger;
            dispatch(actionCreator(ERROR, err));
        });
};
        export const getAccountInfo = ()=>dispatch=>{
            dispatch(actionCreator(GETTING_ACCOUNT_INFO));
        axiosWithAuth()
            .get(`https://droom6.herokuapp.com/api/jobseekers/1`).then( res=>{
                // debugger
                dispatch(actionCreator(ACCOUNT_FETCH_SUCCESS, res.data));
            })
        .catch(err=>{
            //debugger
            dispatch(actionCreator(ERROR,err));
        }) }

export const logOut = () => {
    return actionCreator(LOGGED_OUT);
};

export const loggedIn = account => {
    return {
        type: LOGGED_IN,
        payload: account,
    };
};