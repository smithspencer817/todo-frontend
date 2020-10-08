import { combineReducers } from 'redux';
import listItemsReducer from './listItems';
import listsReducer from './lists';

export default combineReducers({
    listItems: listItemsReducer,
    lists: listsReducer
});