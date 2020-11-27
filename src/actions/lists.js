const token = document.cookie.slice(10);

// READ Lists

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

export const addList = list => {
    return {
        type: 'ADD_LIST',
        list: Object.assign({}, list)
    }
}

export const removeCurrentLists = () => {
    return {
        type: 'REMOVE_CURRENT_LISTS'
    }
}

// READ ListItems

export const addListItem = item => {
    return {
        type: 'ADD_LIST_ITEM',
        listItem: Object.assign({}, item)
    }
}

// CREATE Lists

export const createList = listData => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/lists', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(listData)
        })
        .then(res => res.json())
        .then(list => {
            if (list.length) {
                console.log("error")
            } else {
                list = Object.assign({}, list, {listItems: []})
                dispatch(addList(list))
            }
        })
    }
}

// CREATE ListItems

export const createListItem = listItem => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/list-items', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(listItem)
        })
        .then(res => res.json())
        .then(item => {
            if (item.length) {
                console.log("error")
            } else {
                dispatch(addListItem(item))
            }
        })
    }
}

// UPDATE Lists

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

// UPDATE ListItems

export const updateListItem = itemData => {

    const {itemId, description} = itemData

    fetch(`http://localhost:3000/api/list-items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(description)
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'UPDATE_LIST_ITEM',
        listItem: Object.assign({}, itemData)
    }
}

export const toggleListItemCompleted = toggleData => {

    const { itemId, completed } = toggleData;

    fetch(`http://localhost:3000/api/list-items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(completed)
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    return {
        type: 'TOGGLE_LIST_ITEM_COMPLETED',
        toggleData: Object.assign({}, toggleData)
    }
}

// DELETE Lists

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

// DELETE ListItems

export const deleteListItem = itemData => {
    fetch(`http://localhost:3000/api/list-items/${itemData.itemId}`, {
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
        itemData: Object.assign({}, itemData)
    }
}