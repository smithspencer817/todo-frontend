const token = document.cookie.slice(10);

export const addList = list => {
    return {
        type: 'ADD_LIST',
        list: Object.assign({}, list)
    }
}

export const addListItem = item => {
    return {
        type: 'ADD_LIST_ITEM',
        listItem: Object.assign({}, item)
    }
}

export const updateListItem = (listId, itemId, description) => {
    let data = { description }
    fetch(`http://localhost:3000/api/list-items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'UPDATE_LIST_ITEM',
        listId,
        itemId,
        description
    }
}

export const toggleListItemCompleted = (listId, itemId, completed) => {
    let data = { completed }
    fetch(`http://localhost:3000/api/list-items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'TOGGLE_LIST_ITEM_COMPLETED',
        listId,
        itemId,
        completed
    }
}

export const deleteList = listId => {
    fetch(`http://localhost:3000/api/lists/${listId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'DELETE_LIST',
        listId
    }
}

export const deleteListItem = (listId, itemId) => {
    fetch(`http://localhost:3000/api/list-items/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'DELETE_LIST_ITEM',
        listId,
        itemId
    }
}

export const updateList = listData => {
    fetch(`http://localhost:3000/api/lists/${listData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(listData)
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'UPDATE_LIST',
        list: Object.assign({}, listData)
    }
}

export const removeCurrentLists = () => {
    return {
        type: 'REMOVE_CURRENT_LISTS'
    }
}

export const fetchLists = id => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/users/${id}/lists`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(lists => lists.forEach(list => dispatch(addList(list))))
    }
}