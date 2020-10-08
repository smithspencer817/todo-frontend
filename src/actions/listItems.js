export const addListItem = item => {
    return {
        type: 'ADD_LIST_ITEM',
        listItem: Object.assign({}, item)
    }
}

export const deleteListItem = itemId => {
    return {
        type: 'DELETE_LIST_ITEM',
        itemId
    }
}