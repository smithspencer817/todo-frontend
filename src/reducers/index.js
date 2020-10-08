import { combineReducers } from 'redux';
import listItemsReducer from './listItems';
import listsReducer from './lists';
import userReducer from './user';

export default combineReducers({
    listItems: listItemsReducer,
    lists: listsReducer,
    user: userReducer
});