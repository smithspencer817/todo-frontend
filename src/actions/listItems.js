export const addListItem = item => {
    return {
        type: 'ADD_LIST_ITEM',
        listItem: Object.assign({}, item)
    }
}

export const removeListItem = itemId => {
    return {
        type: 'REMOVE_LIST_ITEM',
        itemId
    }
}