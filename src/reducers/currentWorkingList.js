export default function manageCurrentWorkingList(state = {}, action) {
    switch (action.type) {
        case 'ADD_CURRENT_WORKING_LIST':
            return Object.assign({}, state, action.list)
        case 'REMOVE_CURRENT_WORKING_LIST':
            return {}
        default:
            return state
    }
}