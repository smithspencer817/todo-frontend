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

export const fetchLists = id => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/users/${id}/lists`)
        .then(res => res.json())
        .then(lists => lists.forEach(list => dispatch(addList(list))))
    }
}