export default function manageUser(state = {
    username: '',
    userId: null,
    firstName: '',
    lastName: ''
}, action) {
    switch (action.type) {
        case 'ADD_CURRENT_USER':
            return Object.assign({}, state, action.user)
        case 'REMOVE_CURRENT_USER':
            return {...state}
        default:
            return state
    }
}