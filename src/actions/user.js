export const addCurrentUser = user => {
    return {
        type: 'ADD_CURRENT_USER',
        user: {
            username: user.username,
            userId: user.id,
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