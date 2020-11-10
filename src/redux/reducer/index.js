import {combineReducers} from   'redux';
import initialDataLoadReducer from "./initialDataLoadReducer";

const rootReducer = combineReducers({
    initialDataLoadReducer: initialDataLoadReducer,
});

export default rootReducer;