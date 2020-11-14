export default function manageLists(state = [], action) {
    let listIdx;
    switch (action.type) {

        case 'ADD_LIST':
            return [action.list, ...state]

        case 'ADD_LIST_ITEM':
            listIdx = state.findIndex(list => list.id === action.listItem.listId);
            let list = state.find(list => list.id === action.listItem.listId);
            list.listItems = [...list.listItems, action.listItem]
            return [
                ...state.slice(0, listIdx),
                list,
                ...state.slice(listIdx + 1)
            ]

        case 'UPDATE_LIST_ITEM':
            return state.map(list => {
                if (list.id === action.listId) {
                    const updatedListItems = list.listItems.map(item => {
                        if (item.id === action.itemId) {
                            return Object.assign({}, item, {description: action.description})
                        } else {
                            return item
                        }
                    })
                    return Object.assign({}, list, {listItems: updatedListItems})
                } else {
                    return list
                }
            })
        
        case 'DELETE_LIST_ITEM':
            return state.map(list => {
                if (list.id === action.listId) {
                    const updatedListItems = list.listItems.filter(item => item.id !== action.itemId)
                    return Object.assign({}, list, {listItems: updatedListItems})
                } else {
                    return list
                }
            })
        
        case 'TOGGLE_LIST_ITEM_COMPLETED':
            return state.map(list => {
                if (list.id === action.listId) {
                    const updatedListItems = list.listItems.map(listItem => {
                        if (listItem.id === action.itemId ) {
                            return Object.assign({}, listItem, {completed: action.completed})
                        } else {
                            return listItem
                        }
                    })
                    return Object.assign({}, list, {listItems: updatedListItems})
                } else {
                    return list
                }
            });

        case 'UPDATE_LIST':
            return state.map(list => 
                list.id === action.list.id ? Object.assign(list, action.list) : list
            )

        case 'DELETE_LIST':
            listIdx = state.findIndex(list => list.id === action.listId);
            return [
                ...state.slice(0, listIdx),
                ...state.slice(listIdx + 1)
            ]
        
        case 'REMOVE_CURRENT_LISTS':
            return []

        default:
            return state;
    }
}