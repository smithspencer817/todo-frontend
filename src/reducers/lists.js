export default function manageLists(state = [], action) {
    let idx;
    switch (action.type) {
        case 'ADD_LIST':
            return [...state, action.list]
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