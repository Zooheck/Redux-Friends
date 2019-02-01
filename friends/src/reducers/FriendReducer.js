import { FETCHING, SUCCESS, FAILURE } from '../actions/ActionIndex.js'


const initialState = {
    friends: [],
    isLoading: false
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
        default:
            return state
    }
}