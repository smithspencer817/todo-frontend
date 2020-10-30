export default function manageUser(state = {
    username: '',
    id: null,
    firstName: '',
    lastName: '',
    error: ''
}, action) {
    switch (action.type) {
        case 'ADD_CURRENT_USER':
            return Object.assign({}, state, action.user)
        case 'REMOVE_CURRENT_USER':
            return {...state}
        case 'FETCH_USER_FAILURE':
            return {...state, error: action.error}
        default:
            return state
    }
}