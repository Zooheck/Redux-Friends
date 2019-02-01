import { FETCHING, SUCCESS, ERROR, ADDING, ADD_SUCCESS } from '../actions/ActionIndex.js'


const initialState = {
    friends: [],
    isLoading: false,
    error: false
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING: 
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoading: false
            }
        case ADDING:
            return {
                ...state,
                isLoading: true
            }
        case ADD_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoading: false
            }
        case ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}