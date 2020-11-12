import { combineReducers } from 'redux';
import listsReducer from './lists';
import userReducer from './user';
import currentWorkingListReducer from './currentWorkingList';

export default combineReducers({
    currentWorkingList: currentWorkingListReducer,
    lists: listsReducer,
    user: userReducer
});