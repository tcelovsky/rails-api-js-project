import { combineReducers } from "redux";
import { listsReducer } from './listsReducer';
import { itemReducer } from './itemReducer';

const rootReducer = combineReducers({
    lists: listsReducer,
    item: itemReducer
})

export default rootReducer;