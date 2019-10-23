import {
    UPDATING_ACCOUNT_INFO,
    ACCOUNT_INFORMATION_UPDATED,
    ERROR,
    LOGGED_IN,
    LOGGED_OUT,
} from '../actions/accountActions';

const initialState = {
    account: {},
    updatingAccountInfo: false,
    error: null,
};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATING_ACCOUNT_INFO:
            return { ...state, updatingAccountInfo: true };
        case ACCOUNT_INFORMATION_UPDATED:
            return {
                ...state,
                updatingAccountInfo: false,
                account: action.payload,
                error: null,
            };
        case LOGGED_IN:
            return {
                ...state,
                account: action.payload,
                error: null,
            };
        case LOGGED_OUT:
            return {
                ...state,
                account: {},
                error: null,
            };
        case ERROR:
            return {
                ...state,
                updatingAccountInfo: false,
                error: action.payload,
            };
        default:
            return state;
    }
};