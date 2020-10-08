export default function manageListItems(state = [], action) {
    let idx;
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            return [...state, action.listItem]
        case 'DELETE_LIST_ITEM':
            idx = state.findIndex(item => item.id === action.itemId);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]
        default:
            return state;
    }
}