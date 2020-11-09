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

export const updateList = listData => {
    const token = document.cookie.slice(10);
    fetch(`http://localhost:3000/api/lists/${listData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(listData)
    });
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
        const token = document.cookie.slice(10);
        fetch(`http://localhost:3000/api/users/${id}/lists`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(lists => lists.forEach(list => dispatch(addList(list))))
    }
}