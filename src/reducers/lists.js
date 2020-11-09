export default function manageLists(state = [], action) {
    let idx;
    switch (action.type) {
        case 'ADD_LIST':
            return [action.list, ...state]
        case 'REMOVE_CURRENT_LISTS':
            return []
        case 'UPDATE_LIST':
            return state.map(list => 
                list.id === action.list.id ? action.list : list
            )
        case 'DELETE_LIST':
            idx = state.findIndex(list => list.id === action.listId);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]
        default:
            return state;
    }
}