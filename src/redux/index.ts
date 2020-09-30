import { combineReducers } from 'redux';

import { errorReducer } from './reducers/errorReducer';
import { loaderReducer } from './reducers/loaderReducer';

export const rootReducer = combineReducers({
    error: errorReducer,
    loader: loaderReducer,
});
