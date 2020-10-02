import { combineReducers } from 'redux';

import { authReducer } from './reducers/authReducer';
import { errorReducer } from './reducers/errorReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
    authState: authReducer,
    errorState: errorReducer,
    loaderState: loaderReducer,
    userState: userReducer,
});
