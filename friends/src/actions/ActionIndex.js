import axios from 'axios'



export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADDING = 'ADDING' 
export const ADD_SUCCESS = 'ADD_SUCCESS' 

export const ERROR = 'ERROR'

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: ERROR})
        })
}

export const addFriend = state => dispatch => {
    dispatch({ type: ADDING })
    axios
        .post('http://localhost:5000/api/friends', state)
        .then(response => {
            dispatch({type: ADD_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: ERROR})
        })
}