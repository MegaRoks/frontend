import { combineReducers } from 'redux';

import { authReducer } from './reducers/authReducer';
import { errorReducer } from './reducers/errorReducer';
import { loaderReducer } from './reducers/loaderReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    loader: loaderReducer,
});
