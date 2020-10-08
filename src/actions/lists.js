export const addList = list => {
    return {
        type: 'ADD_LIST',
        list: Object.assign({}, list)
    }
}

export const deleteList = listId => {
    return {
        type: 'DELETE_LIST',
        listId
    }
}