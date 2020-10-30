import { fetchLists } from '../actions/lists';

export const addCurrentUser = user => {
    return {
        type: 'ADD_CURRENT_USER',
        user: {
            username: user.username,
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name
        }
    }
}

export const removeCurrentUser = () => {
    return {
        type: 'REMOVE_CURRENT_USER'
    }
}

export const fetchUserFailure = error => {
    return {
        type: 'FETCH_USER_FAILURE',
        error
    }
}

export const fetchUser = login => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(login)
        })
        .then(res => res.json())
        .then(res => {
          if (res.length) {
            dispatch(fetchUserFailure(res))
          } else {
            document.cookie = `authToken=${res.token}`;
            dispatch(addCurrentUser(res.user))
            dispatch(fetchLists(res.user.id))
          }
        });
    }
}