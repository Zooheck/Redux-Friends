import { FETCHING, SUCCESS, FAILURE } from '../actions/ActionIndex.js'


const initialState = {
    friends: []
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {
                friends: action.payload
            }
        default:
            return state
    }
}