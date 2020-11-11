export const addCurrentWorkingList = list => {
    return {
        type: 'ADD_CURRENT_WORKING_LIST',
        list: Object.assign({}, list)
    }
}