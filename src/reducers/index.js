import { combineReducers } from 'redux';
import listItemsReducer from './listItems';
import listsReducer from './lists';
import userReducer from './user';
import currentWorkingListReducer from './currentWorkingList';

export default combineReducers({
    currentWorkingList: currentWorkingListReducer,
    listItems: listItemsReducer,
    lists: listsReducer,
    user: userReducer
});