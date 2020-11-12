export default function manageLists(state = [], action) {
    let idx;
    switch (action.type) {

        case 'ADD_LIST':
            return [action.list, ...state]

        case 'ADD_LIST_ITEM':
            idx = state.findIndex(list => list.id === action.listItem.listId);
            let list = state.find(list => list.id === action.listItem.listId);
            list.listItems = [action.listItem, ...list.listItems]
            return [
                ...state.slice(0, idx),
                list,
                ...state.slice(idx + 1)
            ]
            
        case 'REMOVE_CURRENT_LISTS':
            return []

        case 'UPDATE_LIST':
            return state.map(list => 
                list.id === action.list.id ? Object.assign(list, action.list) : list
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